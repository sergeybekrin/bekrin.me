import { media } from 'typestyle';
import { rootFontSize } from 'styles/constants';

/**
 * @param {number} value - value in px
 * @returns {string} - formatted em value
 */
export function convertToEm(value) {
    return `${value / rootFontSize}em`;
}

/**
 * @param {Object} styles - styles to apply for mobile breakpoint
 * @returns {Object} - built object with styles
 */
export function mobile(styles) {
    return media({ maxWidth: convertToEm(425) }, styles);
}

/**
 * @param {Object} styles
 * @returns {Object}
 */
export function tablet(styles) {
    return media({ maxWidth: convertToEm(768) }, styles);
}

/**
 * @param {Object} styles
 * @returns {Object}
 */
export function desktop(styles) {
    return media({ minWidth: convertToEm(769) }, styles);
}

