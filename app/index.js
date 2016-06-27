import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { browserHistory, createMemoryHistory, Router, RouterContext, match } from 'react-router';
import 'normalize.css';

import routes from './routes';
import template from './template.ejs';
import './styles/global.styl';

// Render site on client
if (typeof document !== 'undefined') {
	require('./utils/FontUtils').loadFonts();

	const root = document.querySelector('main');
	const history = browserHistory;

	render(<Router history={history} routes={routes} />, root);
}

// Render site to static markup
export default function renderStatic (locals, callback) {
	const history = createMemoryHistory();
	const location = history.createLocation(locals.path);

	match({ routes, location }, (error, redirectLocation, renderProps) => {
		callback(null, template({
			html: renderToString(<RouterContext {...renderProps} />),
			dev: false,
			lang: 'en',
			assets: locals.assets
		}));
	});
}