import { style } from 'typestyle';
import palette from 'styles/palette';

export default {
    separator: style({
        $debugName: 'separator',
        backgroundColor: palette('gray', 200),
        height: '2.25rem',
        width: 2
    })
};
