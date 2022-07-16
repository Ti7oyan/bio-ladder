import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  media: {
    small: '(max-width: 768px)',
    medium: '(max-width: 1440px)',
    large: '(min-width: 1500px)'
  }
})