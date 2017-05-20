import Head from 'next/head';
import { string } from 'prop-types';
import { style } from 'typestyle';

const styles = {
    container: style({
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3em'
    })
};

const ErrorPage = ({ message }) => (
    <div className={styles.container}>
        <Head>
            <title>{message}</title>
        </Head>
        <div>{'\ud83d\ude31'}</div>
        <h1>{message}</h1>
    </div>
);

ErrorPage.propTypes = {
    message: string.isRequired
};

export default ErrorPage;
