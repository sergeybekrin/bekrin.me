import { style } from 'typestyle';
import { mobile } from 'styles/helpers';

export default {
    navigation: style(
        {
            $debugName: 'navigation',
            justifyContent: 'center',
            display: 'flex'
        },
        mobile({
            justifyContent: 'space-between',
            padding: '0 5vmin'
        })
    )
};
