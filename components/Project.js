import { arrayOf, string, any } from 'prop-types';
import { style } from 'typestyle';
import Text from '~/components/Text';
import Link from '~/components/Link';

const styles = {
  project: style({
    marginBottom: 30,
  }),
  link: style({
    display: 'block',
  }),
  tags: style({
    display: 'block',
  }),
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

const Project = ({ tags, href, trackAs, children }) => (
  <Text className={styles.project}>
    <Link className={styles.link} href={href} trackAs={trackAs}>
      {children}
      <span className={styles.tags}>
        {tags.map(tag =>
          <span key={tag} className={styles.tag}>{tag}</span>
        )}
      </span>
    </Link>
  </Text>
);

Project.propTypes = {
  tags: arrayOf(string),
  href: string.isRequired,
  trackAs: string.isRequired,
  children: any.isRequired,
};

export default Project;
