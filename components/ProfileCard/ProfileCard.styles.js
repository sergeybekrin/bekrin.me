import { style } from 'typestyle';
import { mobile } from 'styles/helpers';

export default {
  card: style({
    $debugName: 'profile-card',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 680,
  }),
  image: style(
    {
      $debugName: 'profile-card__image',
      pointerEvents: 'none',
      borderRadius: '50%',
    },
        mobile({
          width: 82,
          height: 82,
        })
    ),
  headline: style(
    {
      $debugName: 'profile-card__headline',
      fontFamily: 'Helvetica, Arial, sans-serif',
      letterSpacing: '-.06em',
      position: 'relative',
      fontWeight: 700,
      fontSize: '3em',
      margin: 0,
      color: '#2e2e2e',
      lineHeight: 1.5,
      marginBottom: '.25em',
    },
        mobile({
          letterSpacing: '-.06em',
          fontSize: '2em',
        })
    ),
  paragraph: style(
    {
      $debugName: 'profile-card__paragraph',
      fontFamily: 'monospace',
      fontWeight: 300,
      fontSize: '1.15em',
      lineHeight: 1.75,
    },
        mobile({
          fontSize: '1em',
        })
    ),
  link: style({
    $debugName: 'profile-card__link',
    whiteSpace: 'nowrap',
  }),
  gdLogo: style({
    $debugName: 'profile-card__gd-link',
    marginRight: '.2em',
    marginBottom: '-.05em',
    position: 'relative',
    width: '.85em',
    height: '.85em',
  }),
};
