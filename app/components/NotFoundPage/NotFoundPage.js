import React from 'react';
import Page from 'components/Page';
import styles from './NotFoundPage.styles';

const NotFoundPage = () => (
    <Page title="404">
        <div className={styles.container}>
            <div>{'\ud83d\ude31'}</div>
            <h1>404</h1>
        </div>
    </Page>
);

export default NotFoundPage;
