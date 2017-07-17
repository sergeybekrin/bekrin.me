import styled from 'styled-components';
import { arrayOf, string, any, func } from 'prop-types';
import Text from '~/components/Text';
import Link from '~/components/Link';

const Card = styled(Text)`
  margin-bottom: 40px;
  margin-top: 40px;
`;

const Label = styled.b`
  display: block;
`;

const Description = styled.span`
  display: block;
  color: #333;
`;

const Tags = styled.span`
  display: block;
`;

const Tag = styled.span`
  background-color: #eee;
  line-height: 1;
  color: #333;
  border-radius: 4;
  font-size: 0.7rem;
  display: inline-block;
  margin-right: 5px;
  padding: 4px 6px;
`;

const Project = ({ name, icon: Icon, tags, href, trackAs, children }) => (
  <Card>
    <Link href={href} trackAs={trackAs}>
      <Label>{Icon && <Icon inline />} {name}</Label>
      <Description>{children}</Description>
      <Tags>
        {tags.map(tag =>
          <Tag key={tag}>{tag}</Tag>
        )}
      </Tags>
    </Link>
  </Card>
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
