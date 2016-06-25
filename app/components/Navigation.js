import React, { Component } from 'react';

import NavigationItem from './NavigationItem.js';
import './NavigationItem.styl';

export default ({ lang }) => {
	return (
		<nav className="navigation">
			<NavigationItem label="About me" to={`/${lang}`} />
			<NavigationItem label="Projects" to={`/${lang}/projects`} />
			<NavigationItem label="Contacts" to={`/${lang}/contacts`} />
		</nav>
	);
};