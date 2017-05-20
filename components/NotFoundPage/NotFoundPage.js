import React from 'react';
import { object } from 'prop-types';
import { classes } from 'typestyle';
import Page from 'components/Page';
import withAsyncFonts from 'helpers/withAsyncFonts';
import fonts from 'styles/fonts';
import styles from './NotFoundPage.styles';

const NotFoundPage = ({ roboto700 }) => (
    <Page title="404">
        <div className={classes(roboto700.styles, styles.container)}>
            <div>{'\ud83d\ude31'}</div>
            <h1>404</h1>
        </div>
    </Page>
);

NotFoundPage.propTypes = {
    roboto700: object
};

export default withAsyncFonts(NotFoundPage, {
    roboto700: fonts.robotoMono700
});
