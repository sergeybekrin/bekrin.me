import React from 'react';
import { OutboundLink } from 'react-ga';

import ContentSection from './ContentSection';
import ProfileCard from './ProfileCard';
import './AboutPage.styl';

export default ({ params: { lang }}) => (
	<div className="about-page">
		<ProfileCard />
		<ContentSection title="Education">
			<b>Bachelor in Applied Informatics</b>
			<div>2012 – 2016</div>
			<OutboundLink
				eventLabel="sstuLink"
				to={lang === 'ru' ? 'http://sstu.ru' : 'http://en.sstu.ru'}
			>Saratov State Technical University</OutboundLink>
		</ContentSection>
	</div>
);