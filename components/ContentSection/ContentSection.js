import React from 'react';
import { node, object } from 'prop-types';
import { classes } from 'typestyle';
import withAsyncFonts from 'helpers/withAsyncFonts';
import fonts from 'styles/fonts';
import styles from './ContentSection.styles';

const ContentSection = ({ title, children, roboto400, ...props }) => (
  <div className={classes(styles.section, roboto400.styles)} {...props}>
    <div className={styles.aside}>{title}</div>
    <div className={styles.content}>{children}</div>
  </div>
);

ContentSection.propTypes = {
  title: node.isRequired,
  children: node.isRequired,
  roboto400: object,
};

export default withAsyncFonts(ContentSection, {
  roboto400: fonts.robotoMono400,
});
