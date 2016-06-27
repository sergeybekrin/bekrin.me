import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';

import './Content.styl';

const transitionNames = {
	enter: 'animated--enter',
	enterActive: 'animated--enter-active',
	leave: 'animated--leave',
	leaveActive: 'animated--leave-active',
	appear: 'animated--appear',
	appearActive: 'animated--appear-active'
};

export default ({ children, pathname }) => (
	typeof window === 'undefined' ?
	<div className="content">{children}</div> :
	<TransitionGroup
		component="div"
		className="content"
		transitionName={transitionNames}
		transitionEnterTimeout={600}
		transitionLeaveTimeout={300}
		transitionAppear={true}
		transitionAppearTimeout={600}
	>
		{React.cloneElement(children, {
			key: pathname
		})}
	</TransitionGroup>
);