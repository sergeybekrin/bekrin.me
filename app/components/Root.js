import React from 'react';

import Navigation from './Navigation';
import Header from './Header';
import './Root.styl';

export default ({ children, params: { lang }}) => (
	<div className="root">
		<Header>
			<Navigation lang={lang} />
		</Header>
		<div>{children}</div>
	</div>
);