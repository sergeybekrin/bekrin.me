import { string } from 'prop-types';
import { style } from 'typestyle';
import csstips from 'csstips';
import Layout from '~/components/Layout';

const styles = {
  container: style(
    csstips.flex,
    csstips.vertical,
    csstips.centerCenter, {
      fontSize: '3em',
    },
  ),
  message: style({
    margin: 0,
  }),
};

const ErrorSection = ({ message }) => (
  <Layout title={message}>
    <div className={styles.container}>
      <div>{'\ud83d\ude31'}</div>
      <h1 className={styles.message}>{message}</h1>
    </div>
  </Layout>
);

ErrorSection.propTypes = {
  message: string.isRequired,
};

export default ErrorSection;
