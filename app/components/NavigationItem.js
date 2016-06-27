import React from 'react';
import { Link } from 'react-router';

export default (props) => (
	<span className="navigation__item">
		<Link className="navigation__link" to={props.to}>{props.label}</Link>
	</span>
);