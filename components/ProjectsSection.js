import Text, { Kinds } from '~/components/Text';
import Section from '~/components/Section';
import Project from '~/components/Project';
import SpectroIcon from '~/components/SpectroIcon';
import CljsIcon from '~/components/CljsIcon';
import NpmkitIcon from '~/components/NpmkitIcon';

const ProjectsSection = () => (
  <Section>
    <Text kind={Kinds.title} bold>
      Open-source &amp;<br />non&#8209;commercial projects
    </Text>
    <Project
      name="Spectro"
      icon={SpectroIcon}
      href="//github.com/sergeybekrin/spectro"
      trackAs="github-spectro"
      tags={[ 'React', 'Flow' ]}
    >Component-based content editor</Project>
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
  </Section>
);

export default ProjectsSection;
