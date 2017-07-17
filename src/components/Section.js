import { any, string } from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
  max-width: 850px;
`;

const Container = ({ className, ...props }) => (
  <div className={className}>
    <Content {...props} />
  </div>
);

Container.propTypes = {
  children: any.isRequired,
  className: string,
};

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Section;
