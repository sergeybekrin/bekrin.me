import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { setStylesTarget } from 'typestyle';
import { waitFontsToLoad } from 'helpers/FontUtils';
import { initializeGA, trackGA } from 'helpers/GoogleAnalyticsUtils';
import routes from 'components/Routes';
import 'styles/globals';

waitFontsToLoad([
    'Roboto Mono:normal:300',
    'Roboto Mono:normal:400',
    'Roboto Mono:normal:700'
]);

initializeGA('UA-19088106-7');

render(
    <Router
        history={browserHistory}
        routes={routes}
        onUpdate={trackGA}
    />,
    document.querySelector('[data-approot]')
);

if (__PROD__) {
    setStylesTarget(document.querySelector('[data-typestyle]'));
}
