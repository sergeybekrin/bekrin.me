import React, { Component, PropTypes } from 'react';

import './Formatter.styl';

const WhitespaceCharacter = () => (
	<span className="non-printable non-printable--space"> </span>
);

const EOLCharacter = () => (
	<span className="non-printable non-printable--eol">&nbsp;</span>
);

/**
 * @param {Object} child
 * @param {number} index
 * @returns {XML}
 */
function formatIfString (child, index) {
	return (
		typeof child === 'string' ?
		<Formatter eol={false} key={`formatter-${index}`}>{child}</Formatter> :
		child
	);
}

export default class Formatter extends Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.array
		]).isRequired,
		eol: PropTypes.bool
	};

	static defaultProps = {
		eol: true
	};


	render () {
		let children = this.props.children;

		// Split text into words
		if (typeof children === 'string') {
			children = children.trim().split(/\s+/g);
		}

		// Recursively proceed children
		const result = (
			children.length > 1 ?
			children.reduce(
				(previousValue, currentValue, index) => {
					return [
						...previousValue,
						(index > 0 ? <WhitespaceCharacter key={`whitespace-${index}`} /> : null), // Skip whitespace before first item
						formatIfString(currentValue, index)
					];
				},
				formatIfString(children[0], 0)
			) :
			children
		);

		return (
			<span className="formatter">
				{result}
				{this.props.eol && <EOLCharacter />}
			</span>
		);
	}
}