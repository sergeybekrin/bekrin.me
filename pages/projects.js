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
        Open-source &amp;
        <br />
        non&#8209;commercial projects
      </Heading>
      <Grid>
        <Project
          name="npmkit"
          icon={NpmkitIcon}
          href="https://npmkit.app"
          trackAs="npmkit"
        >
          macOS menubar app for quick access to all your projects
        </Project>
        <Project
          name="💌 styled-email-components"
          href="//github.com/sbekrin/styled-email-components"
          trackAs="github-sec"
        >
          Extension of styled-components for building email-first components
        </Project>
        <Project
          name="cljs-babel"
          icon={CljsIcon}
          href="//github.com/sbekrin/cljs-babel"
          trackAs="github-cljs"
        >
          Proof-of-concept ClojureScript compiler without binary dependencies
        </Project>
        <Project
          name="🔠 react-with-async-fonts"
          href="//github.com/sbekrin/react-with-async-fonts"
          trackAs="github-rwaf"
        >
          Handy module for working with custom fonts
        </Project>

        <Project
          name="📑 transform-scss-import-to-string"
          href="//github.com/researchgate/babel-plugin-transform-scss-import-to-string"
          trackAs="github-rg-tsits"
        >
          Babel plugin for inlining Sass sheets into variable declaration
        </Project>
        <Project
          name="🤖💬 react-converse"
          href="//github.com/react-converse/react-converse"
          trackAs="github-react-converse"
        >
          Toolkit for creating declarative chatbots with React
        </Project>
        <Project
          name="Canvaz"
          icon={SpectroIcon}
          href="//github.com/sbekrin/canvaz"
          trackAs="github-canvaz"
        >
          Component-based visual content editor for React
        </Project>
      </Grid>
    </Section>
  </Layout>
);
