import React from 'react';
import Page from 'components/Page';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import ContentSection from 'components/ContentSection';
import ProfileCard from 'components/ProfileCard';

const AboutPage = () => (
  <Page>
    <ProfileCard />
    <ContentSection title={<h2><Formatter>Experience</Formatter></h2>}>
      <b><Formatter>Technologies</Formatter></b>
      <ul>
        <li>JavaScript (ES5, ES2015+, Flow), ClojureScript</li>
        <li>React &amp; Redux, Angular 1.x</li>
        <li>express, Bookshelf, Electron</li>
        <li>Radium, Stylus, SASS</li>
        <li>webpack, Gulp</li>
        <li>AVA, Jasmine, Protractor</li>
        <li>
                    Microdata and <abbr title="Server-side rendering">SSR</abbr>
          {' '} for SEO
                </li>
        <li>WAI-ARIA for accessibility</li>
        <li>MongoDB, PostgreSQL &amp; MySQL</li>
      </ul>
      <b><Formatter>Environment and tools</Formatter></b>
      <ul>
        <li>nvm &amp; npm</li>
        <li>Jenkins, Travis, AppVeyor</li>
        <li>Git</li>
        <li>Docker</li>
        <li>Digital Ocean, AWS (EB, S3)</li>
        <li>UNIX (Debian, CentOS)</li>
      </ul>
    </ContentSection>
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
