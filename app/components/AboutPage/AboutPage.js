import React from 'react';
import Page from 'components/Page';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import ContentSection from 'components/ContentSection';
import ProfileCard from 'components/ProfileCard';

export const AboutPage = () => (
    <Page title="Sergey Bekrin">
        <ProfileCard />
        <ContentSection title={<h2><Formatter>Education</Formatter></h2>}>
            <b><Formatter>Bachelor in Applied Informatics</Formatter></b>
            <div><Formatter>2012 – 2016</Formatter></div>
            <Link eventLabel="sstu-link" to="http://en.sstu.ru">
                <Formatter>Saratov State Technical University</Formatter>
            </Link>
        </ContentSection>
    </Page>
);

export default AboutPage;
