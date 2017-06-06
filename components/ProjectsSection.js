import { style, classes } from 'typestyle';
import csstips from 'csstips';
import { desktop } from '~/styles/media';
import Link from '~/components/Link';
import Text, { Kinds } from '~/components/Text';
import Section from '~/components/Section';
import Project from '~/components/Project';
import SpectroIcon from '~/components/SpectroIcon';
import CljsIcon from '~/components/CljsIcon';
import NpmkitIcon from '~/components/NpmkitIcon';

const styles = {
  layout: style(desktop(csstips.horizontal)),
  row: style(csstips.flex1),
  left: style(desktop({
    marginRight: 10,
  })),
  right: style(desktop({
    marginLeft: 10,
  })),
};

const ProjectsSection = () => (
  <Section>
    <Text kind={Kinds.title} bold>
      Open-source &amp;<br />non&#8209;commercial projects
    </Text>
    <Text>
      I contribute to open-source in free time, as well have personal{' '}
      projects available. If you need help with open-source or{' '}
      non-commercial project, feel free to{' '}
      <Link href="/contacts">reach me out</Link> for an advice or support 👋.
    </Text>
    <div className={styles.layout}>
      <div className={classes(styles.row, styles.left)}>
        <Project
          name="Spectro"
          icon={SpectroIcon}
          href="//github.com/sergeybekrin/spectro"
          trackAs="github-spectro"
          tags={[ 'React', 'Flow' ]}
        >Component-based visual content editor for React</Project>
        <Project
          name="cljs-babel"
          icon={CljsIcon}
          href="//github.com/sergeybekrin/cljs"
          trackAs="github-cljs"
          tags={[ 'Transpiler', 'Babel', 'AVA' ]}
        >
          Proof-of-concept ClojureScript compiler without binary{' '}
          dependencies
        </Project>
      </div>
      <div className={classes(styles.row, styles.right)}>
        <Project
          name="npmkit"
          icon={NpmkitIcon}
          href="//github.com/sergeybekrin/npmkit"
          trackAs="github-npmkit"
          tags={[ 'React', 'Redux', 'Electron' ]}
        >Cross-platform desktop app for working with npm packages</Project>
        <Project
          name="react-with-async-fonts"
          href="//github.com/sergeybekrin/react-with-async-fonts"
          trackAs="github-rwaf"
          tags={[ 'React', 'TypeScript', 'Jest' ]}
        >Handy module for working with custom fonts</Project>
      </div>
    </div>
  </Section>
);

export default ProjectsSection;
