import { arrayOf, string, any, func } from 'prop-types';
import { style } from 'typestyle';
import { mobile } from '~/styles/media';
import Text from '~/components/Text';
import Link from '~/components/Link';

const block = style({ display: 'block' });
const styles = {
  project: style({
    marginBottom: 40,
    marginTop: 40,
  }),
  icon: style({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: 10,
    marginBottom: 5,
    width: 35,
    height: 35,
  }, mobile({
    width: 30,
    height: 30,
  })),
  content: block,
  name: block,
  descritpion: style({
    display: 'block',
    color: '#333',
  }),
  tags: block,
  tag: style({
    background: '#eee',
    lineHeight: 1,
    color: '#333',
    borderRadius: 4,
    fontSize: '0.7rem',
    display: 'inline-block',
    marginRight: 5,
    padding: '4px 6px',
  }),
};

const Project = ({ name, icon: Icon, tags, href, trackAs, children }) => (
  <Text className={styles.project}>
    <Link href={href} trackAs={trackAs}>
      <b className={styles.name}>
        {Icon && <Icon className={styles.icon} />}
        {name}
      </b>
      <span className={styles.descritpion}>{children}</span>
      <span className={styles.tags}>
        {tags.map(tag =>
          <span key={tag} className={styles.tag}>{tag}</span>
        )}
      </span>
    </Link>
  </Text>
);

Project.propTypes = {
  name: string.isRequired,
  icon: func,
  tags: arrayOf(string),
  href: string.isRequired,
  trackAs: string.isRequired,
  children: any.isRequired,
};

export default Project;
