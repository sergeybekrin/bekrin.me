/* eslint-disable global-require */
import React from 'react';
import { createMemoryHistory, RouterContext, match } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';
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
        const serverContainerMarkup = renderToStaticMarkup(
            <ServerRoot publicPath={locals.publicPath}>
                <RouterContext {...renderProps} />
            </ServerRoot>
        );

        callback(null, `<!doctype html>${serverContainerMarkup}`);
    });
}
