export function extractAssetsPath(locals) {
    if (locals.webpackStats) {
        const assets = Object.keys(locals.webpackStats.compilation.assets);
        const css = assets.filter((value) => value.match(/\.css$/));
        const js = assets.filter((value) => value.match(/\.js$/));

        return { css, js };
    }

    return {
        css: [],
        js: [ 'bundle.js' ]
    };
}
