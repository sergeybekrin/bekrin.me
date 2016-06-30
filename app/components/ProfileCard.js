import React from 'react';

import userpic from '../assets/userpic-162x162.jpg';
import './ProfileCard.styl';

export default () => (
	<div
		className="profile-card"
		itemscope
		itemtype="http://schema.org/Person"
	>
		<div className="profile-card__left-column">
			<img
				className="profile-card__image"
				src={userpic}
				alt="Sergey Bekrin"
				itemprop="image"
			/>
		</div>
		<div className="profile-card__right-column">
			<h1 className="profile-card__title">
				<span itemprop="givenName">Sergey</span>&nbsp;<span itemprop="familyName">Bekrin</span>, a Software Engineer
			</h1>
		</div>
	</div>
);