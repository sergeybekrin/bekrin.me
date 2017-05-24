import Document from 'next/document';
import { getStyles } from 'typestyle';

export default class Root extends Document {
    static getInitialProps({ renderPage }) {
        return {
            ...renderPage(),
            styles: <style data-typestyle>{getStyles()}</style>
        };
    }
}
