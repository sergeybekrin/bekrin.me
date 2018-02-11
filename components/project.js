import styled from 'styled-components';
import { arrayOf, string, any, func } from 'prop-types';
import Text from '~/components/text';
import ExternalLink from '~/components/link/external';
import media from '~/media';

const Card = styled(Text)`
  box-sizing: border-box;
  margin: 2rem 0;
  flex: 0 50%;

  ${media.phone`
    flex: 0 100%;
    margin: 1rem 0;
  `};
`;

const Label = styled.b`
  display: block;
`;

const Description = styled.span`
  display: block;
  color: ${props => props.theme.darkGray};
`;

const Tags = styled.span`
  display: block;
`;

const Tag = styled.span`
  background-color: #eee;
  line-height: 1;
  color: ${props => props.theme.darkGray};
  border-radius: 4;
  font-size: 0.7rem;
  display: inline-block;
  margin-right: 5px;
  padding: 4px 6px;
`;

const Project = ({ name, icon: Icon, tags, href, trackAs, children }) => (
  <Card>
    <ExternalLink href={href} trackAs={trackAs}>
      <Label>
        {Icon && (
          <span>
            <Icon inline />&nbsp;
          </span>
        )}
        {name}
      </Label>
      <Description>{children}</Description>
      <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
    </ExternalLink>
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
