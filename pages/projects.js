import Layout from '~/components/layout';
import styled, { css } from 'styled-components';
import media from '~/media';
import Heading from '~/components/heading';
import Link from '~/components/link/internal';
import Text from '~/components/text';
import Section from '~/components/section';
import Project from '~/components/project';
import SpectroIcon from '~/components/icon/spectro';
import CljsIcon from '~/components/icon/cljs';
import NpmkitIcon from '~/components/icon/npmkit';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default () => (
  <Layout title="Projects">
    <Section>
      <Heading bold>
        Open-source &amp;<br />non&#8209;commercial projects
      </Heading>
      <Text>
        I contribute to open-source in free time, as well have personal
        side-projects. If you need help with open-source or non-commercial
        project, feel free to <Link href="/contacts">reach me out</Link> for an
        advice or support 👋.
      </Text>
      <Grid>
        <Project
          name="npmkit"
          icon={NpmkitIcon}
          href="//github.com/npmkit/npmkit"
          trackAs="github-npmkit"
          tags={['React', 'Electron']}
        >
          Tray app for quick access to all your projects
        </Project>
        <Project
          name="🤖💬 react-converse"
          href="//github.com/react-converse/react-converse"
          trackAs="github-react-converse"
          tags={['React', 'Flow']}
        >
          Toolkit for creating declarative chatbots with React
        </Project>
        <Project
          name="🔠 react-with-async-fonts"
          href="//github.com/sergeybekrin/react-with-async-fonts"
          trackAs="github-rwaf"
          tags={['React', 'TypeScript', 'Jest']}
        >
          Handy module for working with custom fonts
        </Project>
        <Project
          name="📑 transform-scss-import-to-string"
          href="//github.com/researchgate/babel-plugin-transform-scss-import-to-string"
          trackAs="github-rg-tsits"
          tags={['Babel', 'Plugin', 'Sass']}
        >
          Babel plugin for inlining Sass sheets into const declaration
        </Project>
        <Project
          name="Canvaz"
          icon={SpectroIcon}
          href="//github.com/sergeybekrin/canvaz"
          trackAs="github-canvaz"
          tags={['React', 'TypeScript']}
        >
          Component-based visual content editor for React
        </Project>
        <Project
          name="cljs-babel"
          icon={CljsIcon}
          href="//github.com/sergeybekrin/cljs"
          trackAs="github-cljs"
          tags={['Transpiler', 'Babel', 'AVA']}
        >
          Proof-of-concept ClojureScript compiler without binary dependencies
        </Project>
      </Grid>
    </Section>
  </Layout>
);
