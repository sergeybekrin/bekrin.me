/* eslint-disable global-require */
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { waitFontsToLoad } from 'utils/FontUtils';
import { initializeGA, trackGA } from 'utils/GoogleAnalyticsUtils';
import routes from 'components/Routes';
import 'styles/global.styl';

const root = document.querySelector('[data-approot]');
const history = browserHistory;

waitFontsToLoad([
    'Roboto Mono:normal:300',
    'Roboto Mono:normal:400',
    'Roboto Mono:normal:700'
]);

initializeGA('UA-19088106-7');

render(
    <Router
        history={history}
        routes={routes}
        onUpdate={trackGA}
    />,
    root
);
