const breathingPatterns = [
  {
    name: "Box Breathing",
    steps: [
      { label: "Inhale", duration: 4 },
      { label: "Hold", duration: 4 },
      { label: "Exhale", duration: 4 },
      { label: "Hold", duration: 4 },
    ],
  },
  {
    name: "Equal Breathing",
    steps: [
      { label: "Inhale", duration: 5 },
      { label: "Exhale", duration: 5 },
    ],
  },
  {
    name: "4-7-8",
    steps: [
      { label: "Inhale", duration: 4 },
      { label: "Hold", duration: 7 },
      { label: "Exhale", duration: 8 },
    ],
  },
  {
    name: "Triangle Breathing",
    steps: [
      { label: "Inhale", duration: 4 },
      { label: "Hold", duration: 4 },
      { label: "Exhale", duration: 4 },
    ],
  },
  {
    name: "Relaxed",
    steps: [
      { label: "Inhale", duration: 6 },
      { label: "Exhale", duration: 7 },
    ],
  },
  {
    name: "Energizing",
    steps: [
      { label: "Inhale", duration: 3 },
      { label: "Exhale", duration: 3 },
    ],
  },
  {
    name: "Custom",
    custom: true,
    steps: [],
  },
];
export default breathingPatterns;
