import { style } from 'typestyle';
import palette from 'styles/palette';
import { mobile } from 'styles/helpers';

export default {
    item: style(
        {
            $debugName: 'navigation-item',
            alignItems: 'center',
            display: 'flex',
            verticalAlign: 'middle',
            justifyContent: 'center',
            margin: '0 1.5em'
        },
        mobile({
            margin: 0
        })
    ),
    link: style({
        $debugName: 'item-link',
        transition: 'color 200ms ease',
        textDecoration: 'none',
        color: palette('blue'),
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        $nest: {
            '&:active': {
                outline: 'none'
            },
            '&:hover': {
                color: palette('red')
            }
        }
    }),
    linkActive: style({
        $debugName: 'item-link--active',
        color: palette('gray', '700'),
        cursor: 'default',
        // Prevent hover style for :active
        $nest: {
            '&&:hover': {
                color: palette('gray', '700')
            }
        }
    })
};
