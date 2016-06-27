import React from 'react';

import Navigation from './Navigation';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './Root.styl';

export default ({ children, location: { pathname }, params: { lang }}) => (
	<div className="root">
		<Header>
			<Navigation lang={lang} />
		</Header>
		<Content pathname={pathname}>{children}</Content>
		<Footer />
	</div>
);