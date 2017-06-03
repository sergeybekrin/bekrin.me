import Text, { Kinds } from '~/components/Text';
import Section from '~/components/Section';

const ProjectsSection = () => (
  <Section>
    <Text kind={Kinds.title} bold>
      Open-source &amp;<br />non&#8209;commercial projects
    </Text>
  </Section>
);

export default ProjectsSection;
