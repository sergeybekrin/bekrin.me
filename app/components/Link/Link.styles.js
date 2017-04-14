import { style } from 'typestyle';
import palette from 'styles/palette';

export default {
    link: style({
        $debugName: 'link',
        color: palette('blue'),
        fontWeight: 400,
        textDecoration: 'none',
        transition: 'color 200ms ease',
        $nest: {
            '&:hover': {
                color: palette('red')
            }
        }
    })
};
