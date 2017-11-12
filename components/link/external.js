import { Component } from 'react';
import { string, func } from 'prop-types';
import ReactGA from 'react-ga';
import Link from '~/components/link';

const NEWTAB = '_blank';
const MIDDLECLICK = 1;

class ExternalLink extends Component {
  static propTypes = {
    href: string.isRequired,
    onClick: func,
    trackAs: string,
    target: string,
  };

  // Based on
  // github.com/react-ga/react-ga/blob/master/src/components/OutboundLink.js#L19
  handleClick = event => {
    if (!this.props.trackAs) {
      return;
    }

    const eventMeta = { label: this.props.trackAs };
    const isSameTarget = this.props.target !== NEWTAB;
    const isRegularClick = !(
      event.ctrlKey ||
      event.shiftKey ||
      event.metaKey ||
      event.button === MIDDLECLICK
    );

    if (isSameTarget && isRegularClick) {
      event.preventDefault();
      ReactGA.outboundLink(eventMeta, () => {
        window.location.href = this.props.href;
      });
    } else {
      ReactGA.outboundLink(eventMeta, () => {});
    }

    if (typeof this.props.onClick === 'function') {
      this.props.onClick(event);
    }
  };

  render(props = this.props) {
    return <Link {...props} onClick={this.handleClick} />;
  }
}

export default ExternalLink;
