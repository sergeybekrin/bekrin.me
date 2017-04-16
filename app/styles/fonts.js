import { style } from 'typestyle';

const family = 'Roboto Mono';
const styles = style({
    $debugName: 'font',
    $nest: {
        // Keep priority over other styles
        '&&': { fontFamily: '"Roboto Mono", monospace' }
    }
});

export default {
    robotoMono300: {
        weight: 300,
        family,
        styles
    },
    robotoMono400: {
        weight: 400,
        family,
        styles
    },
    robotoMono700: {
        weight: 700,
        family,
        styles
    }
};
