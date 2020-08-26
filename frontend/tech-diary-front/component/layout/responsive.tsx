export const breakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const mediaQuery = {
  sm: `@media (max-width: ${breakPoints.sm}px)`,
  md: `@media (min-width: ${breakPoints.md}px) and (max-width:${breakPoints.lg}px)`,
  lg: `@media (min-width: ${breakPoints.lg}px) and (max-width:${breakPoints.xl}px)`,
  xl: `@media (min-width: ${breakPoints.xl}px)`,
};
