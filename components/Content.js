import React from 'react';
import { node } from 'prop-types';
import { style } from 'typestyle';
import palette from '~/styles/palette';

const styles = {
    content: style({
        $debugName: 'content',
        background: palette('gray', 200),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    })
};

const Content = ({ children }) => (
    <div className={styles.content}>{children}</div>
);

Content.propTypes = {
    children: node.isRequired
};

export default Content;
