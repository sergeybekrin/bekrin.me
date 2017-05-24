import { Component } from 'react';
import { any } from 'prop-types';
import { cssRule, style, setStylesTarget } from 'typestyle';
import { px, percent, viewHeight, viewWidth } from 'csx';
import Header from '~/components/Header';
import Content from '~/components/Content';
import Footer from '~/components/Footer';

cssRule(':root', {
    '-webkit-font-smoothing': 'antialiased',
    font: '18px/1.5 sans-serif',
    boxSizing: 'border-box',
    minWidth: px(320),
    minHeight: percent(100),
    cursor: 'default',
    padding: 0,
    margin: 0
});

cssRule('*, *::before, *::after', {
    boxSizing: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0
});

cssRule('body', {
    overflow: 'visible'
});

const styles = {
    root: style({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        minHeight: viewHeight(100),
        width: viewWidth(100)
    })
};

export default class Layout extends Component {
    static propTypes = {
        children: any.isRequired
    };

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
