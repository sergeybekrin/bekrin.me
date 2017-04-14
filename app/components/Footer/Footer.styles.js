import { style } from 'typestyle';
import palette from 'styles/palette';

export default {
    footer: style({
        $debugName: 'footer',
        textAlign: 'center',
        padding: '5vmin 10vmin',
        backgroundColor: palette('white'),
        color: palette('gray', '500')
    })
};
