const mappings = {
  blue: {
    500: '#0f58fb',
  },
  red: {
    500: '#ad0051',
  },
  gray: {
    700: '#333',
    500: '#777',
    200: '#f6f6f6',
  },
  white: {
    500: '#fff',
  },
};

/**
 * Returns color from palette
 * @param {string} color - color code
 * @param {number?} accent - color accent gradation
 * @returns {string} - css hex color format
 */
export default function palette(color, accent = 500) {
  return mappings[color][accent];
}
