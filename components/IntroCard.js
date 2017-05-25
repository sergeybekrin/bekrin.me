import React from 'react';
import { object } from 'prop-types';
import { classes } from 'typestyle';
import withAsyncFonts from 'react-with-async-fonts';
import Link from 'components/Link';
import ContentSection from 'components/ContentSection';
import Formatter from 'components/Formatter';
import SvgIcon from 'components/SvgIcon';
import fonts from 'styles/fonts';
import userpicPath from './assets/userpic.png';
import { style } from 'typestyle';
import { mobile } from 'styles/helpers';

const styles = {
    card: style({
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 680
    }),
    image: style({
        pointerEvents: 'none',
        borderRadius: '50%'
    }, mobile({
        width: 82,
        height: 82
    })),
    headline: style({
        fontFamily: 'Helvetica, Arial, sans-serif',
        letterSpacing: '-.06em',
        position: 'relative',
        fontWeight: 700,
        fontSize: '3em',
        margin: 0,
        color: '#2e2e2e',
        lineHeight: 1.5,
        marginBottom: '.25em'
    }, mobile({
        letterSpacing: '-.06em',
        fontSize: '2em'
    })),
    paragraph: style({
        fontFamily: 'monospace',
        fontWeight: 300,
        fontSize: '1.15em',
        lineHeight: 1.75
    }, mobile({
        fontSize: '1em'
    })),
    link: style({
        whiteSpace: 'nowrap'
    }),
    gdLogo: style({
        marginRight: '.2em',
        marginBottom: '-.05em',
        position: 'relative',
        width: '.85em',
        height: '.85em'
    })
};

const IntroCard = ({ robotoFont }) => (
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
            <p className={classes(styles.paragraph, robotoFont.styles)}>
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

IntroCard.propTypes = {
    robotoFont: object
};

export default withAsyncFonts(IntroCard, {
    robotoFont: fonts.robotoMono300
});
