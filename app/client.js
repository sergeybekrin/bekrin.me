import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { setStylesTarget } from 'typestyle';
import { initializeAnalytics, trackPageView } from 'helpers/AnalyticsTools';
import routes from 'components/Routes';
import 'styles/globals';

initializeAnalytics('UA-19088106-7');

render(
    <Router
        history={browserHistory}
        routes={routes}
        onUpdate={trackPageView}
    />,
    document.querySelector('[data-approot]')
);

if (__PROD__) {
    setStylesTarget(document.querySelector('[data-typestyle]'));
}
