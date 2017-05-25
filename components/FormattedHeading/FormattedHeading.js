import React from 'react';
import { text } from 'prop-types';
import Formatter from 'components/Formatter';

const FormattedHeading = ({ children }) => (
  <Formatter component="h2">{children}</Formatter>
);

FormattedHeading.propTypes = {
  children: text.isRequired,
};

export default FormattedHeading;
