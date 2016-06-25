import React from 'react';
import { Link } from 'react-router';

export default (props) => (
	<Link
		className="navigation__item"
		to={props.to}
	>{props.label}</Link>
);