import React from 'react';
import Page from 'components/Page';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import ContentSection from 'components/ContentSection';
import ProfileCard from 'components/ProfileCard';

export const AboutPage = () => (
    <Page>
        <ProfileCard />
        <ContentSection title={<h2><Formatter>Education</Formatter></h2>}>
            <b><Formatter>Bachelor in Applied Informatics</Formatter></b>
            <div><Formatter>2012 – 2016</Formatter></div>
            <Link eventLabel="sstu-link" to="http://en.sstu.ru">
                <Formatter>Saratov State Technical University</Formatter>
            </Link>
        </ContentSection>
        <ContentSection title={<h2><Formatter>Experience</Formatter></h2>}>
            <b><Formatter>Technologies</Formatter></b>
            <ul>
                <li>JavaScript</li>
                <li>React, Redux &amp; Angular 1.x</li>
                <li>Node.js &amp; Electron</li>
                <li>Stylus, SASS</li>
                <li>webpack, gulp</li>
                <li>Java (Spring, Jetty)</li>
                <li>Microdata and <abbr title="Server-side rendering">SSR</abbr> for SEO</li>
                <li>WAI-ARIA for accessibility</li>
                <li>MongoDB, PostgreSQL &amp; MySQL</li>
            </ul>
            <b>Environment and tools</b>
            <ul>
                <li>nvm &amp; npm</li>
                <li>Travis, AppVeyor</li>
                <li>Git, Perforce</li>
                <li>Docker</li>
                <li>Digital Ocean, AWS (EB, S3)</li>
                <li>UNIX (Debian, CentOS)</li>
            </ul>
        </ContentSection>
    </Page>
);

export default AboutPage;
