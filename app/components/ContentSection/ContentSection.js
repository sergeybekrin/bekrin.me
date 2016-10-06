import React, { PropTypes } from 'react';
import './ContentSection.styl';

const ContentSection = ({ title, children, ...props }) => (
    <div className="Section" {...props}>
        <div className="Section-aside">{title}</div>
        <div className="Section-content">{children}</div>
    </div>
);

ContentSection.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};

export default ContentSection;
