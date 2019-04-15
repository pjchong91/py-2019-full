const CONTAINER_WIDTH = 1440;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 320;

export const setFontSizeVW = fontSize => {
  return `${(fontSize * 100) / CONTAINER_WIDTH}vw`;
};

export const vw = width => {
  return `${(width / CONTAINER_WIDTH) * 100}vw`;
};

export const vwTablet = width => {
  return `${(width / TABLET_WIDTH) * 100}vw`;
};

export const vwMobile = width => {
  return `${(width / MOBILE_WIDTH) * 100}vw`;
};
