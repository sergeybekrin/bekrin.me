import React from 'react';
import Link from 'components/Link';
import ContentSection from 'components/ContentSection';
import Formatter from 'components/Formatter';
import SvgIcon from 'components/SvgIcon';
import userpicPath from 'assets/userpic.jpg';
import './ProfileCard.styl';

const ProfileCard = () => (
    <ContentSection
        itemScope
        itemType="http://schema.org/Person"
        title={
            <img
                className="ProfileCard-image"
                src={userpicPath}
                alt="Sergey Bekrin"
                itemProp="image"
            />
        }
    >
        <div className="ProfileCard">
            <h1 className="ProfileCard-headline">
                <span itemProp="givenName">Sergey</span>&nbsp;
                <span itemProp="familyName">Bekrin</span>,<br />
                a Software Engineer
            </h1>
            <p className="ProfileCard-paragraph">
                <Formatter>
                    Currently working at
                    <Link to="http://griddynamics.com" eventLabel="gd-link" className="gd-link">
                        <SvgIcon code="gd-logo" />
                        <Formatter eol={false}>Grid Dynamics</Formatter>
                    </Link> as a UI Developer.
                    I care about User and Developer Experience.
                    Love Open Source and make contributions sometimes.
                    Always open to share &amp; learn.
                </Formatter>
            </p>
        </div>
    </ContentSection>
);

export default ProfileCard;
