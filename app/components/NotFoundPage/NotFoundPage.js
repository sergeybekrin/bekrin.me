import React from 'react';
import Page from 'components/Page';
import './NotFoundPage.styl';

const NotFoundPage = () => (
    <Page title="404">
        <div className="NotFoundPage">
            <div>{'\ud83d\ude31'}</div>
            <h1 className="">404</h1>
        </div>
    </Page>
);

export default NotFoundPage;
