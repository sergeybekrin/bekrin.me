import { style } from 'typestyle';
import palette from 'styles/palette';
import { mobile } from 'styles/helpers';

export default {
    header: style(
        {
            $debugName: 'header',
            fontFamily: 'Arial, Helvetica, sans-serif',
            padding: '1.5em 10vmin',
            color: palette('white')
        },
        mobile({
            padding: '1em 0'
        })
    )
};
