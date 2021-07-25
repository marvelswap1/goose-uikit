import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#B80000",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#fff",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#fff",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#B80000",
  borderColor: "#524B63",
  card: "#141414",
  gradients: {
    bubblegum: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,16,0.8869922969187675) 10%, rgba(137,8,8,1) 28%, rgba(105,56,66,1) 45%, rgba(82,90,107,1) 57%, rgba(65,116,138,1) 66%, rgba(0,212,255,1) 100%);",
  },
};
