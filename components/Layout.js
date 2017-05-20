import { Component } from 'react';
import Head from 'next/head';
import { style, setStylesTarget } from 'typestyle';
import Header from '~/components/Header';
import Content from '~/components/Content';
import Footer from '~/components/Footer';

const styles = {
    root: style({
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    })
};

export default class Layout extends Component {
    componentDidMount() {
        setStylesTarget(document.querySelector('[data-typestyle]'));
    }

    render() {
        return (
            <div className={styles.root}>
                <Header />
                <Content>{this.props.children}</Content>
                <Footer />
            </div>
        );
    }
}
