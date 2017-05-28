import { Component } from 'react';
import { style } from 'typestyle';

const styles = {
  bomb: style({
    outline: 'none',
    cursor: 'pointer',
  }),
};

export default class Bomb extends Component {
  state = {
    exploded: false,
  };

  explode = () => this.setState({ exploded: true });

  render() {
    return (
      <span
        onClick={this.explode}
        className={!this.state.exploded && styles.bomb}
      >
        {this.state.exploded ? '💥' : '💣'}
      </span>
    );
  }
}
