import { css } from 'styled-components';

function createFromTemplate(maxWidth) {
  return styles => css`
    @media (max-width: ${maxWidth / 16}em) {
      ${css(...styles)}
    }
  `;
}

function phone(...styles) {
  return createFromTemplate(426)(styles);
}

function tablet(...styles) {
  return createFromTemplate(768)(styles);
}

function desktop(...styles) {
  return createFromTemplate(992)(styles);
}

export default { phone, tablet, desktop };
