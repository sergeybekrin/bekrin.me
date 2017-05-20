import { style } from 'typestyle';
import { mobile } from 'styles/helpers';

export default {
    card: style(
        {
            $debugName: 'npmkit-card',
            backgroundColor: 'rgba(224, 140, 143, 0.20)',
            transition: 'background-color 200ms ease',
            textDecoration: 'none',
            borderRadius: 4,
            marginBottom: '5vmin',
            padding: '2em',
            display: 'block',
            maxWidth: '30em',
            $nest: {
                '&:hover': {
                    backgroundColor: 'rgba(224, 140, 143, 0.30)'
                }
            }
        },
        mobile({
            textAlign: 'center',
            padding: '5vmin'
        })
    ),
    label: style({
        color: 'black',
        display: 'block'
    }),
    description: style({
        fontWeight: 400,
        color: '#333'
    })
};
