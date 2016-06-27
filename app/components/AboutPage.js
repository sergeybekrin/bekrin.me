import React from 'react';

import ContentSection from './ContentSection';
import './AboutPage.styl';

export default () => (
	<div className="about-page">
		<ContentSection title="Education">
			<b>Bachelor in Applied Informatics</b>
			<div>2012 – 2016</div>
			<a href="http://sstu.ru">Saratov State Technical University</a>
		</ContentSection>
	</div>
);