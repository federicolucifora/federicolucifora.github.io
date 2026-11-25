// Home page animation: the profile picture bounces around the screen (like a DVD logo),
// then moves to the "presentation" and "skills" sections while scrolling.

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let pImageDiv, me1, me2;
let vw, vh;
let scrollBound1, scrollBound2, scrollBound3;
let pImagePositions; // where the picture goes in the "presentation" and "skills" sections
let bounds; // edges of the screen the picture bounces against
let ball; // current position and direction of the bouncing picture
let bounceTimer = null; // only one bounce can be scheduled at a time
let state = ''; // 'bouncing', 'presentation', 'skills', 'still'
let hasScrolled = false;
let instant = false; // true = the next move happens without animation (after a change of screen size)
let view = ''; // kind of view: phone / tablet / computer, upright or wide (see currentView)
let showTimer = null;

// ---- small helpers -------------------------------------------------------------------------------------------------

const random = (min, max) => Math.random() * (max - min) + min;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function position(element, x, y) {
  element.style.position = 'absolute';
  element.style.left = x + 'px';
  element.style.top = y + 'px';
}

function stopBouncing() {
  clearTimeout(bounceTimer);
  bounceTimer = null;
}

/** Vertical middle of an element in the page. */
function middle(id) {
  const rect = document.getElementById(id).getBoundingClientRect();
  return rect.top + window.scrollY + rect.height / 2;
}

/** The picture stays still (phones, tablets and any upright screen): next to the presentation, centred on its text.
    It moves around only on computers (wider than 992px, with a wide window). */
function isStill() {
  return isMobile || window.innerWidth <= 992 || window.innerHeight > window.innerWidth;
}

function currentView() {
  const size = window.innerWidth <= 600 ? 'phone' : window.innerWidth <= 992 ? 'tablet' : 'computer';
  return `${size}-${isStill() ? 'still' : 'moving'}`;
}

function placeStill() {
  stopBouncing();
  pImageDiv.style.transition = 'none';
  pImageDiv.classList.toggle('imageSize1', isMobile && window.innerHeight < window.innerWidth);
  pImageDiv.classList.remove('imageSize2');
  showFirstPhoto(false); // the photo that appears while scrolling on computers
  position(pImageDiv, 5 * vw, middle('presentation') - pImageDiv.offsetHeight / 2);
}

// ---- positions -----------------------------------------------------------------------------------------------------

function calculatePositions() {
  vw = window.innerWidth / 100;
  vh = window.innerHeight / 100;
  // The picture is centred vertically on the text it goes next to, wherever that text ends up
  // (before, fixed heights were used, so on screens with other proportions it was misaligned).
  // Sizes of the picture there (index.css): 25vw next to the presentation (imageSize1) and 20vw next to
  // the skills (imageSize2); on tablets it always stays 26vw.
  const tablet = window.innerWidth <= 992;
  const size1 = (tablet ? 26 : 25) * vw;
  const size2 = (tablet ? 26 : 20) * vw;
  pImagePositions = [10 * vw, middle('presentation') - size1 / 2, 72 * vw, middle('levelDesign') - size2 / 2];
  // The picture is 15vw wide while bouncing.
  bounds = {
    minX: -0.2 * vw,
    maxX: window.innerWidth - 14.8 * vw,
    minY: 3.8 * vw,
    maxY: window.innerHeight - 14.8 * vw,
  };
}

function calculateScrollBounds() {
  const top = (id) => document.getElementById(id).getBoundingClientRect().top + window.scrollY;
  scrollBound1 = top('presentation') - window.innerHeight;
  scrollBound2 = top('skills') - (window.innerHeight / 3) * 2;
  scrollBound3 = top('workContainer') - window.innerHeight / 2;
}

// ---- bouncing ------------------------------------------------------------------------------------------------------

/** Starts a new path from (x, y) in a random direction. */
function newBall(x, y) {
  const angle = random(0, Math.PI * 2);
  ball = {
    x: clamp(x, bounds.minX, bounds.maxX),
    y: clamp(y, bounds.minY, bounds.maxY),
    dx: Math.cos(angle),
    dy: Math.sin(angle),
  };
}

/** Moves the ball to the next edge it hits, and changes its direction there. Returns the distance travelled. */
function advanceToNextEdge() {
  const timeX = ball.dx > 0 ? (bounds.maxX - ball.x) / ball.dx : ball.dx < 0 ? (bounds.minX - ball.x) / ball.dx : Infinity;
  const timeY = ball.dy > 0 ? (bounds.maxY - ball.y) / ball.dy : ball.dy < 0 ? (bounds.minY - ball.y) / ball.dy : Infinity;
  const t = Math.max(0, Math.min(timeX, timeY));
  ball.x += ball.dx * t;
  ball.y += ball.dy * t;
  if (timeX <= timeY) ball.dx *= -1;
  if (timeY <= timeX) ball.dy *= -1;
  return t;
}

function bounce() {
  const distance = advanceToNextEdge();
  // Same speed as before: crossing the whole screen diagonally takes 5 seconds.
  const diagonal = Math.hypot(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY);
  const seconds = (distance / diagonal) * 5;
  pImageDiv.style.transition = `${seconds}s linear`;
  position(pImageDiv, ball.x, ball.y);
  bounceTimer = setTimeout(bounce, seconds * 1000);
}

// ---- reacting to the scroll ----------------------------------------------------------------------------------------

function showFirstPhoto(first) {
  me1.classList.toggle('imageTransparent', !first);
  me2.classList.toggle('imageTransparent', first);
}

function update() {
  if (isStill()) {
    if (state !== 'still') {
      state = 'still';
      placeStill();
    }
    instant = false;
    return;
  }

  const scroll = window.scrollY;
  const move = instant ? 'none' : '0.5s linear';
  instant = false;

  if (scroll === 0) {
    if (state === 'bouncing') return;
    state = 'bouncing';
    stopBouncing();
    showFirstPhoto(true);
    pImageDiv.classList.remove('imageSize1', 'imageSize2');
    if (reduceMotion.matches) {
      // No bouncing: the picture simply waits in the middle of the screen.
      pImageDiv.style.transition = move;
      position(pImageDiv, 50 * vw, 50 * vh);
    } else if (!hasScrolled) {
      bounce();
    } else {
      // Coming back to the top: go to the centre, then start bouncing again from there.
      pImageDiv.style.transition = move;
      position(pImageDiv, 50 * vw, 50 * vh);
      newBall(50 * vw, 50 * vh);
      bounceTimer = setTimeout(bounce, 500);
    }
  } else if (scroll > scrollBound1 && scroll < scrollBound2) {
    if (state === 'presentation') return;
    state = 'presentation';
    stopBouncing();
    hasScrolled = true;
    showFirstPhoto(false);
    pImageDiv.style.transition = move;
    position(pImageDiv, pImagePositions[0], pImagePositions[1]);
    pImageDiv.classList.add('imageSize1');
    pImageDiv.classList.remove('imageSize2');
  } else if (scroll >= scrollBound2 && scroll < scrollBound3) {
    if (state === 'skills') return;
    state = 'skills';
    stopBouncing();
    hasScrolled = true;
    showFirstPhoto(false);
    pImageDiv.style.transition = move;
    position(pImageDiv, pImagePositions[2], pImagePositions[3]);
    pImageDiv.classList.add('imageSize1', 'imageSize2');
  } else {
    // Between the top and the first section, or below the skills: the picture stays where it is.
    if (state === 'bouncing') {
      stopBouncing();
      state = 'paused';
    }
  }
}

// ---- placing the picture -------------------------------------------------------------------------------------------

/** When the picture is about to bounce, it starts from a random point, moved to the edge it would hit first. */
function startingPoint() {
  newBall(random(5 * vw, window.innerWidth - 22 * vw), random(5 * vw, window.innerHeight - 22 * vw));
  advanceToNextEdge();
  pImageDiv.style.transition = 'none';
  position(pImageDiv, ball.x, ball.y);
  pImageDiv.getBoundingClientRect(); // makes the browser place it there before the first bounce starts
}

/** Puts the picture in its place for the current screen, without animation, and then shows it. */
function placeAndShow() {
  showTimer = null;
  calculatePositions();
  calculateScrollBounds();
  stopBouncing();
  state = '';
  instant = true;
  if (!isStill()) startingPoint();
  update();
  pImageDiv.classList.add('imageReady');
}

function onResize() {
  // Changing kind of view (e.g. from computer to tablet, or turning the screen): the picture disappears
  // and comes back in the right place when the resizing is over, instead of flying across the page.
  if (currentView() !== view || showTimer) {
    view = currentView();
    pImageDiv.classList.remove('imageReady');
    stopBouncing();
    clearTimeout(showTimer);
    showTimer = setTimeout(placeAndShow, 250);
    return;
  }

  // Same kind of view, only a bit bigger or smaller: the picture moves to its new place at once.
  calculatePositions();
  calculateScrollBounds();
  if (state === 'bouncing') {
    const rect = pImageDiv.getBoundingClientRect();
    newBall(rect.left + window.scrollX, rect.top + window.scrollY);
  }
  state = '';
  instant = true;
  update();
}

function start() {
  pImageDiv = document.getElementById('pImageDiv');
  me1 = document.getElementById('me1');
  me2 = document.getElementById('me2');
  view = currentView();

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', onResize);
  reduceMotion.addEventListener('change', () => {
    state = '';
    update();
  });
  placeAndShow();
}

// Start from the top of the page every time it is opened or reloaded.
window.addEventListener('beforeunload', () => window.scrollTo(0, 0));

if (document.readyState === 'complete') start();
else window.addEventListener('load', start);
