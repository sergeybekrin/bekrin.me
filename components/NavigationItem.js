import Link from 'next/link';
import { string } from 'prop-types';
import { style, classes } from 'typestyle';
import palette from '~/styles/palette';
import { mobile } from '~/styles/media';

const styles = {
    item: style({
        alignItems: 'center',
        display: 'flex',
        verticalAlign: 'middle',
        justifyContent: 'center',
        margin: '0 1.5em'
    }, mobile({
        margin: 0
    })),
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

const NavigationItem = ({ to, label }) => (
    <span className={styles.item}>
        <Link href={to} prefetch>
            <a className={styles.link}>{label}</a>
        </Link>
    </span>
);

export default NavigationItem;
