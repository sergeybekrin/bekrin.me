import { style } from 'typestyle';

export default {
    nonPrintable: style({
        $debugName: 'non-printable',
        background: 'transparent',
        pointerEvents: 'none',
        position: 'relative',
        textAlign: 'center',
        speak: 'none',
        $nest: {
            '&::after': {
                content: '" "'
            },
            '&::before': {
                fontWeight: 400,
                position: 'absolute',
                textAlign: 'center',
                opacity: '.20',
                width: '100%',
                left: 0
            }
        }
    }),
    space: style({
        $debugName: 'space',
        $nest: {
            '&::before': {
                content: '"\\2219"'
            }
        }
    }),
    eol: style({
        $debugName: 'eol',
        $nest: {
            '&::before': {
                content: '"\\00AC"'
            }
        }
    })
};
