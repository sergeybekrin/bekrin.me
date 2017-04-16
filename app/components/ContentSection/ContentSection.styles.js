import { mobile, tablet, desktop } from 'styles/helpers';
import { style } from 'typestyle';

export default {
    section: style(
        {
            $debugName: 'section',
            display: 'flex',
            fontFamily: 'Monaco, monospace',
            margin: '5vmin 0'
        },
        desktop({
            flexDirection: 'row'
        }),
        tablet({
            flexDirection: 'column'
        })
    ),
    aside: style(
        {
            $debugName: 'aside',
            lineHeight: 1.2,
            marginRight: '3rem',
            fontSize: '1.35em',
            fontWeight: 700,
            textTransform: 'capitalize',
            flex: 1
        },
        desktop({
            textAlign: 'right'
        }),
        mobile({
            marginRight: 0
        })
    ),
    content: style(
        {
            $debugName: 'content',
            fontWeight: 300,
            lineHeight: 1.8,
            margin: 0,
            flex: 3,
            // Kill this one day
            $nest: {
                'p + p': {
                    marginTop: '1.5em'
                },
                'ul:not([class])': {
                    listStyle: 'none',
                    margin: '1em 0',
                    padding: '0 0 0 1em',
                    $nest: {
                        'li::before': {
                            content: '"\\2014"',
                            opacity: 0.25,
                            marginLeft: '-1em',
                            position: 'absolute'
                        }
                    }
                }
            }
        },
        tablet({
            paddingTop: '1em'
        })
    )
};
