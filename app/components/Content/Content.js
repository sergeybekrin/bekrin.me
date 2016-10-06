import React, { PropTypes } from 'react';
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

const Content = ({ children, pathname }) => (
    typeof window === 'undefined' ?
        <div className="Content">{children}</div> :
        <TransitionGroup
            component="div"
            className="Content"
            transitionName={transitionNames}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={300}
            transitionAppear
            transitionAppearTimeout={600}
        >
            {React.cloneElement(children, { key: pathname })}
        </TransitionGroup>
);

Content.propTypes = {
    children: PropTypes.node.isRequired,
    pathname: PropTypes.string.isRequired
};

export default Content;
