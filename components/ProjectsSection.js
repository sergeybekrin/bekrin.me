import Text, { Kinds } from '~/components/Text';
import Section from '~/components/Section';
import Project from '~/components/Project';

const ProjectsSection = () => (
  <Section>
    <Text kind={Kinds.title} bold>
      Open-source &amp;<br />non&#8209;commercial projects
    </Text>
    <Project
      href="//github.com/sergeybekrin/spectro"
      trackAs="github-spectro"
      tags={[ 'React', 'Flow' ]}
    >
      <b>Spectro</b>, a component-based content editor
    </Project>
    <Project
      href="//github.com/sergeybekrin/cljs"
      trackAs="github-cljs"
      tags={[ 'Transpiler', 'Babel', 'AVA' ]}
    >
      <b>cljs</b>, proof-of-concept ClojureScript compiler without binary{' '}
      dependencies
    </Project>
    <Project
      href="//github.com/sergeybekrin/react-with-async-fonts"
      trackAs="github-rwaf"
      tags={[ 'React', 'TypeScript', 'Jest' ]}
    >
      <b>react-with-async-fonts</b>, handy module for working with custom fonts
    </Project>
    <Project
      href="//github.com/sergeybekrin/npmkit"
      trackAs="github-npmkit"
      tags={[ 'React', 'Redux', 'Electron' ]}
    >
      <b>npmkit</b>, a cross-platform desktop app for working{' '}
      with npm packages
    </Project>
  </Section>
);

export default ProjectsSection;
