import { style } from 'typestyle';
import palette from 'styles/palette';

export default {
    content: style({
        $debugName: 'content',
        background: palette('gray', 200),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    })
};
