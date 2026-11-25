// The four areas used to filter the work page. Each one uses a colour family of the original palette
// (see styles/common.css): light tone for the background of the label, dark tone for its text.
export const areas = [
  { id: '3d', label: '3D', family: 1 }, // orange
  { id: 'visual', label: 'Visual', family: 2 }, // red
  { id: 'interactive', label: 'Interactive', family: 3 }, // teal
  { id: 'motion', label: 'Motion', family: 4 }, // pink
] as const;

export type AreaId = (typeof areas)[number]['id'];

export const areaIds = areas.map((area) => area.id) as [AreaId, ...AreaId[]];

export const areaById = Object.fromEntries(areas.map((area) => [area.id, area])) as Record<
  AreaId,
  (typeof areas)[number]
>;
