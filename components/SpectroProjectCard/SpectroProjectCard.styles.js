import { style } from 'typestyle';
import { mobile } from 'styles/helpers';

export default {
  card: style(
    {
      $debugName: 'spectro-card',
      backgroundColor: 'rgba(66, 129, 243, 0.1)',
      transition: 'background-color 200ms ease',
      borderRadius: '.2em',
      padding: '2em',
      display: 'block',
      maxWidth: '30em',
      $nest: {
        '&:hover': {
          backgroundColor: 'rgba(66, 129, 243, 0.2)',
        },
      },
    },
        mobile({
          textAlign: 'center',
          padding: '5vmin',
        })
    ),
  image: style({
    $debugName: 'spectro-card__image',
    maxWidth: 150,
    maxHeight: 75,
    width: '100%',
  }),
  label: style({
    $debugName: 'spectro-card__label',
    fontWeight: 400,
    color: '#333',
  }),
};
