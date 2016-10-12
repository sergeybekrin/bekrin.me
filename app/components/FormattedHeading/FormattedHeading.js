import React, { PropTypes } from 'react';
import Formatter from 'components/Formatter';

const FormattedHeading = ({ children }) => (
    <Formatter component="h2">{children}</Formatter>
);

FormattedHeading.propTypes = {
    children: PropTypes.text.isRequired
};

export default FormattedHeading;
