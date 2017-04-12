/* eslint-disable no-plusplus, react/no-array-index-key */
import React, { Component, PropTypes } from 'react';
import './Formatter.styl';

const WhitespaceCharacter = () => (
    <span className="NonPrintable NonPrintable--space">{' '}</span>
);

const EOLCharacter = () => (
    <span className="NonPrintable NonPrintable--eol" />
);

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

    static eolIndex = 0;

    _formatIfString(input) {
        return (
            typeof input === 'string' ?
                this._format(input, false) :
                input
        );
    }

    _format(input, eol = true) {
        // Split sentences by words
        const children = (
            typeof input === 'string' ?
                input.trim().split(/\s+/g) :
                input
        );

        // Recursively proceed children
        const result = (
            children.length > 1 ?
            children.reduce(
                (previousValue, currentValue, index) => [
                    (index > 0 ? [ ...previousValue ] : null),
                    (index > 0 ?
                        <WhitespaceCharacter key={`whitespace-${index}`} /> :
                        null
                    ),
                    this._formatIfString(currentValue)
                ],
                this._formatIfString(children[0])
            ) :
            children
        );

        // Append EOL character if required
        return (
            eol ?
            [ result, <EOLCharacter key={`eol-${++Formatter.eolIndex}`} /> ] :
            result
        );
    }

    render() {
        return (
            <span className="Formatter">
                {this._format(this.props.children, this.props.eol)}
            </span>
        );
    }
}
