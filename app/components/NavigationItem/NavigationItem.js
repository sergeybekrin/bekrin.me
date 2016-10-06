import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './NavigationItem.styl';

const NavigationItem = ({ to, label }) => (
    <span className="NavigationItem">
        <Link
            activeClassName="NavigationItem-link--active"
            className="NavigationItem-link"
            onlyActiveOnIndex={to === '/'}
            to={to}
        >{label}</Link>
    </span>
);

NavigationItem.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default NavigationItem;
