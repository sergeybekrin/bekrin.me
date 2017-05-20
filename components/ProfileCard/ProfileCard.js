import React from 'react';
import { object } from 'prop-types';
import { classes } from 'typestyle';
import withAsyncFonts from 'helpers/withAsyncFonts';
import Link from 'components/Link';
import ContentSection from 'components/ContentSection';
import Formatter from 'components/Formatter';
import SvgIcon from 'components/SvgIcon';
import fonts from 'styles/fonts';
import userpicPath from './assets/userpic.png';
import styles from './ProfileCard.styles';

const ProfileCard = ({ roboto300 }) => (
    <ContentSection
        itemScope
        itemType="http://schema.org/Person"
        title={
            <img
                className={styles.image}
                src={userpicPath}
                alt="Sergey Bekrin"
                itemProp="image"
                width={162}
                height={162}
            />
        }
    >
        <div className={styles.card}>
            <h1 className={styles.headline}>
                <span itemProp="givenName">Sergey</span>&nbsp;
                <span itemProp="familyName">Bekrin</span>,<br />
                a Software Engineer
            </h1>
            <p className={classes(styles.paragraph, roboto300.styles)}>
                <Formatter>
                    Currently working at
                    <Link
                        to="http://griddynamics.com"
                        eventLabel="gd-link"
                        className={styles.link}
                    >
                        <SvgIcon code="gd-logo" className={styles.gdLogo} />
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

ProfileCard.propTypes = {
    roboto300: object
};

export default withAsyncFonts(ProfileCard, {
    roboto300: fonts.robotoMono300
});
