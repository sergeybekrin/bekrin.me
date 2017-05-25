import { style } from 'typestyle';
import palette from 'styles/palette';
import { mobile } from 'styles/helpers';

export default {
  page: style(
    {
      $debugName: 'page',
      backgroundColor: palette('gray', 200),
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0 10vmin',
    },
        mobile({
          padding: '0 5vmin',
        })
    ),
};
