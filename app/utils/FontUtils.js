import fontLoader from 'webfontloader';

/**
 * Loads required fonts
 */
export function loadFonts () {
	fontLoader.load({
		google: {
			families: [ 'Roboto+Mono:300,400,700:latin,cyrillic' ]
		}
	});
}