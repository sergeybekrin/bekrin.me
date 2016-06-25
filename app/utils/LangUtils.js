export function validateLanguageCode ({ params: { lang }}, replace) {
	if ([ 'en', 'ru' ].indexOf(lang) < 0) {
		replace('/en');
	}
}