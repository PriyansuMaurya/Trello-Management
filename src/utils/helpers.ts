const colors = [
  '#F4C2C2', // Baby Pink
  '#A2C8E0', // Baby Blue
  '#FFF0AA', // Pale Yellow
  '#B2D8D8', // Mint Green
  '#E6E6FA', // Lavender
  '#FFDAB9', // Peach
  '#D3A0C9', // Light Lilac
  '#C8E6C9', // Pale Green
  '#FFF3B0', // Buttercream
  '#87CEEB', // Sky Blue
];

export function swap<T>(arr: T[], i: number, j: number): T[] {
  const copy = [...arr];
  const tmp = copy[i];
  copy[i] = copy[j];
  copy[j] = tmp;
  return copy;
}

export function pickRandomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

export function getDate() {
  const currentDate = new Date();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDayName = days[currentDate.getDay()];
  const currentMonthName = months[currentDate.getMonth()];
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();

  return `${currentDayName}, ${currentMonthName}, ${currentYear}`;
}
