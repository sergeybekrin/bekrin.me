import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Root from './components/Root';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactsPage from './components/ContactsPage';
import NotFoundPage from './components/NotFoundPage';
import { validateLanguageCode } from './utils/LangUtils';

export default (
	<Route path="/" component={Root}>
		<IndexRedirect to="/en" />
		<Route path=":lang" onEnter={validateLanguageCode}>
			<IndexRoute component={AboutPage} />
			<Route path="projects" component={ProjectsPage} />
			<Route path="contacts" component={ContactsPage} />
		</Route>
		<Route path="*" component={NotFoundPage} />
	</Route>
);