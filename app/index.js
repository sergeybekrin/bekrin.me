/* eslint-disable global-require */
import React from 'react';
import { createMemoryHistory, RouterContext, match } from 'react-router';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Helmet from 'react-helmet';
import ServerRoot from 'components/ServerRoot';
import routes from 'components/Routes';

// Enable client side renderer
if (typeof window !== 'undefined') {
    require('./client');
}

// Export static site renderer
export default function render (locals, callback) {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);

    match({ routes, location }, (error, redirectLocation, renderProps) => {
        // Render application itself
        const applicationMarkup = renderToString(
            <RouterContext {...renderProps} />
        );

        // Render static markup wrapper
        const head = Helmet.rewind();

        const serverContainerMarkup = renderToStaticMarkup(
            <ServerRoot {...head}>{applicationMarkup}</ServerRoot>
        );

        callback(null, `<!doctype html>${serverContainerMarkup}`);
    });
}
