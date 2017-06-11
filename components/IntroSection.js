import { style } from 'typestyle';
import { tablet, mobile } from '~/styles/media';
import csstips from 'csstips';
import Section from '~/components/Section';
import Text, { Kinds } from '~/components/Text';

const styles = {
  group: style(
    csstips.horizontal,
    csstips.betweenJustified,
    mobile(csstips.vertical)
  ),
  image: style({
    borderRadius: '50%',
    marginLeft: 30,
  }, tablet({
    width: 108,
    height: 108,
  }), mobile({
    order: -1,
    marginLeft: 0,
    marginRight: 30,
    marginBottom: 10,
  })),
  headline: style({
    letterSpacing: '-.06em',
    fontSize: '3em',
    lineHeight: 1.35,
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
    <div className={styles.group}>
      <Text kind={Kinds.title} className={styles.headline} bold>
        <span itemProp="givenName">Sergey</span>&nbsp;
        <span itemProp="familyName">Bekrin</span>, <br />
        a Software Engineer
      </Text>
      <img
        className={styles.image}
        src="/static/userpic.png"
        alt="Sergey Bekrin"
        itemProp="image"
        width={162}
        height={162}
      />
    </div>
    <Text className={styles.paragraph}>
      JavaScript engineer who cares about both external project quality
      and developer experience. Always open to support, share & learn.
      Traveling and contributing to open source in free time.
    </Text>
  </Section>
);

export default IntroSection;
