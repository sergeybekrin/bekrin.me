import { media } from 'typestyle';

const rootFontSize = 16;

/**
 * @param {number} value - value in px
 * @returns {string} - formatted em value
 */
export function convertToEm(value) {
    return `${value / rootFontSize}em`;
}

/**
 * @param {Object} styles - styles to apply for mobile breakpoint
 * @returns {Object} - typestyle CSSProperties object
 */
export function mobile(styles) {
    return media({ maxWidth: convertToEm(425) }, styles);
}

/**
 * @param {Object} styles - styles object for tablet breakpoint
 * @returns {Object} - typestyle CSSProperties object
 */
export function tablet(styles) {
    return media({ maxWidth: convertToEm(768) }, styles);
}

/**
 * @param {Object} styles - styles object for desktop breakpoint
 * @returns {Object} - typestyle CSSProperties object
 */
export function desktop(styles) {
    return media({ minWidth: convertToEm(769) }, styles);
}
