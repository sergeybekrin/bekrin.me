import React from 'react';
import { style } from 'typestyle';
import { tablet, mobile } from '~/styles/media';
import csstips from 'csstips';
import Section from '~/components/Section';
import Text from '~/components/Text';
// import Bomb from '~/components/Bomb';

const styles = {
  card: style(csstips.horizontal, mobile(csstips.vertical)),
  group: style(csstips.flex1, {
    marginLeft: 30,
  }, mobile({
    marginLeft: 0,
    marginTop: 10,
  })),
  image: style({
    pointerEvents: 'none',
    borderRadius: '50%',
  }, tablet({
    width: 82,
    height: 82,
  })),
  headline: style({
    letterSpacing: '-.06em',
    position: 'relative',
    fontWeight: 700,
    fontSize: '3em',
    margin: 0,
    color: 'black',
    lineHeight: 1.5,
  }, tablet({
    letterSpacing: '-.06em',
    fontSize: '2em',
  })),
  paragraph: style({
    lineHeight: 1.75,
    color: '#2e2e2e',
  }),
};

const IntroSection = () => (
  <Section itemScope itemType="http://schema.org/Person">
    <div className={styles.card}>
      <img
        className={styles.image}
        src="/static/userpic.png"
        alt="Sergey Bekrin"
        itemProp="image"
        width={162}
        height={162}
      />
      <div className={styles.group}>
        <h1 className={styles.headline}>
          <span itemProp="givenName">Sergey</span>&nbsp;
          <span itemProp="familyName">Bekrin</span>,<br />
          a Software Engineer
        </h1>
        <Text className={styles.paragraph}>
          JavaScript engineer who cares about both external project quality
          and developer experience. Always open to support, share & learn.
          Traveling and contributing to open source in free time.
        </Text>
      </div>
    </div>
  </Section>
);

export default IntroSection;
