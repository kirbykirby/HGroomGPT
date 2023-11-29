export type themeType =
  | "现代风格"
  | "复古风格"
  | "极简风格"
  | "专业风格"
  | "热带风格";

export type roomType =
  | "客厅"
  | "餐厅"
  | "卧室"
  | "浴室"
  | "办公室"
  | "游戏室";

export type lanType =
  | "中文简体"
  | "English"
  | "日本語"
  | "Français"
  | "Deutsch"
  | "한국어";

export const themes: themeType[] = [
  "现代风格",
  "极简风格",
  "专业风格",
  "热带风格",
  "复古风格",
];
export const rooms: roomType[] = [
  "客厅",
  "餐厅",
  "办公室",
  "卧室",
  "浴室",
  "游戏室",
];

export  const lans: lanType[] =[
  "中文简体",
  "English",
  "日本語",
  "Français",
  "Deutsch",
  "한국어"
];