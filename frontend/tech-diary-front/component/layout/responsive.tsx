export const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const mediaQuery = {
  sm: `@media (max-width: ${breakPoints.sm}px)`,
  md: `@media screen and (max-width: ${breakPoints.md}px)`,
  lg: `@media screen and (max-width: ${breakPoints.lg}px)`,
  xl: `@media screen and (max-width: ${breakPoints.xl}px)`,
};
