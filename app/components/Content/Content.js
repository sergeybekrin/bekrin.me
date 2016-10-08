import React, { PropTypes } from 'react';
import './Content.styl';

const Content = ({ children }) => (
    <div className="Content">{children}</div>
);

Content.propTypes = {
    children: PropTypes.node.isRequired
};

export default Content;
