import { cssRule } from 'typestyle';
import { baseFontSize } from 'styles/constants';

cssRule(':root', {
    '-webkit-font-smoothing': 'antialiased',
    font: '100%/1.5 sans-serif',
    boxSizing: 'border-box',
    minWidth: 320,
    minHeight: '100%',
    cursor: 'default',
    display: 'flex',
    padding: 0,
    margin: 0
});

cssRule('*, *::before, *::after', {
    boxSizing: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0
});

cssRule('::selection', {
    backgroundColor: '#B3D4FC',
    textShadow: 'none'
});

cssRule('body, [data-approot]', {
    display: 'flex',
    flex: 1
});

cssRule('body', {
    fontSize: baseFontSize,
    overflow: 'visible'
});
