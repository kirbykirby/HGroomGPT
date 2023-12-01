export type themeType =
  | "Modern"
  | "Vintage"
  | "Minimalist"
  | "Professional"
  | "Tropical";

export type roomType =
  | "Living Room"
  | "Dining Room"
  | "Bedroom"
  | "Bathroom"
  | "Office"
  | "Gaming Room";

export type lanType =
  | "中文简体"
  | "English"
  | "日本語"
  | "Français"
  | "Deutsch"
  | "한국어";

  export const themes: themeType[] = [
    "Modern",
    "Minimalist",
    "Professional",
    "Tropical",
    "Vintage",
  ];
  export const rooms: roomType[] = [
    "Living Room",
    "Dining Room",
    "Office",
    "Bedroom",
    "Bathroom",
    "Gaming Room",
  ];

export  const lans: lanType[] =[
  "中文简体",
  "English",
  "日本語",
  "Français",
  "Deutsch",
  "한국어"
];