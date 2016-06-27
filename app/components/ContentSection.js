import React from 'react';

import './ContentSection.styl';

export default ({ title, children }) => (
	<div className="section">
		<h2 className="section__title">{title}</h2>
		<div className="section__content">{children}</div>
	</div>
);