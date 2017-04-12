import FontFaceObserver from 'fontfaceobserver';

/**
 * @param {Array<string>} fonts - fonts awaited to be loaded
 */
export function waitFontsToLoad(fonts = []) {
    fonts.forEach(font => {
        const [
            family,
            style = 'normal',
            weight = 'normal'
        ] = font.split(':');

        const observer = new FontFaceObserver(family, { style, weight });

        observer.load()
            .then(() => {
                document.documentElement.classList.add([
                    'font',
                    family.replace(/\s+/g, '').toLowerCase(),
                    style,
                    weight,
                    'ready'
                ].join('-'));
            })
            .catch(() => {
                // Do nothing
            });
    });
}
