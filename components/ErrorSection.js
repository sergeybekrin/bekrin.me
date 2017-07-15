import { string } from 'prop-types';
import { style } from 'typestyle';
import * as csstips from 'csstips';
import Layout from '~/components/Layout';
import Text, { Kinds } from '~/components/Text';

const styles = {
  container: style(
    csstips.flex,
    csstips.vertical,
    csstips.centerCenter
  ),
  message: style({
    fontSize: '3rem',
  }),
};

const ErrorSection = ({ message }) => (
  <Layout title={message}>
    <div className={styles.container}>
      <Text
        kind={Kinds.title}
        className={styles.message}
        bold
      >{'\ud83d\ude31'} {message}</Text>
    </div>
  </Layout>
);

ErrorSection.propTypes = {
  message: string.isRequired,
};

export default ErrorSection;
