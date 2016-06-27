/**
 * Checks if specified language code is valid
 * Used with react-router
 *
 * @param {Object} props
 * @param {Function} replace
 */
export function validateLanguageCode ({ params: { lang }}, replace) {
	if ([ 'en', 'ru' ].indexOf(lang) < 0) {
		replace('/en');
	}
}