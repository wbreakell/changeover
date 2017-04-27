import { css } from 'styled-components';

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const remSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${remSize}rem) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
