/* eslint-disable global-require */
import React from 'react';
import { createMemoryHistory, RouterContext, match } from 'react-router';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Helmet from 'react-helmet';
import ServerRoot from 'components/ServerRoot';
import routes from 'components/Routes';
import { extractAssetsPath } from 'helpers/WebpackUtils';

// Enable client side renderer
if (typeof global.document !== 'undefined') {
    require('./client');
}

// Export static site renderer
export default function render(locals) {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);
    const assets = extractAssetsPath(locals);

    return new Promise((resolve, reject) => {
        match({ routes, location }, (error, redirectLocation, renderProps) => {
            if (error) {
                reject(error);
                return;
            }

            // Render application itself
            const applicationMarkup = renderToString(
                <RouterContext {...renderProps} />
            );

            // Render static markup wrapper
            const serverContainerMarkup = renderToStaticMarkup(
                <ServerRoot
                    assets={assets}
                    helmet={Helmet.rewind()}
                >{applicationMarkup}</ServerRoot>
            );

            resolve(`<!doctype html>${serverContainerMarkup}`);
        });
    });
}
