/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { oneOfType, string, array, bool } from 'prop-types';
import { classes } from 'typestyle';
import styles from './Formatter.styles';

const WhitespaceCharacter = () => (
  <span className={classes(styles.nonPrintable, styles.space)}>{' '}</span>
);

const EOLCharacter = () => (
  <span className={classes(styles.nonPrintable, styles.eol)} />
);

export default class Formatter extends Component {
  static propTypes = {
    children: oneOfType([ string, array ]).isRequired,
    eol: bool,
  };

  static defaultProps = {
    eol: true,
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
                  this._formatIfString(currentValue),
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
      <span>{this._format(this.props.children, this.props.eol)}</span>
    );
  }
}
