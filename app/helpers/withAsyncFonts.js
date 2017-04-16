import React, { Component } from 'react';
import Analytics from 'react-ga';
import FontFaceObserver from 'fontfaceobserver';

/**
 * @param {Object} data - font data object
 * @param {string} data.family - font family name
 * @param {string} data.style - font style code
 * @param {number} data.weight - font weight number
 * @returns {Promise} - font observer promise
 */
function onceFontReady({ family, style = 'normal', weight = 400 }) {
    return (new FontFaceObserver(family, { style, weight })).load();
}

/**
 * @param {Object} data - object resolved from promise
 * @param {Object} data.font - font object data
 * @param {number} data.delta - delta in ms
 * @returns {Object} - promise with font data
 */
function trackFontReady({ font, delta }) {
    Analytics.timing({
        category: 'Fonts',
        variable: 'load',
        value: delta,
        label: `${font.family} ${font.weight}`
    });

    return font;
}

function trackTiming(promise) {
    const startTime = Date.now();

    return promise
        .then(font => ({ font, delta: Date.now() - startTime }))
        .then(trackFontReady);
}

/**
 * Async font-face loader HOC
 * @param {Component} WrappedComponent - target component to wrap
 * @param {Object} fonts - fonts mapping
 * @returns {Component} - wrapped component
 */
function withAsyncFonts(WrappedComponent, fonts) {
    return class extends Component {
        static cache = {};

        componentWillMount() {
            // Set default state for required fonts
            Object.keys(fonts).forEach(code => {
                this.setState({ [code]: {} });
            });
        }

        componentDidMount() {
            const codes = Object.keys(fonts);
            const values = Object.values(fonts);

            values
                .map(onceFontReady)
                .map(trackTiming)
                .forEach((promise, index) => {
                    // Set font key to true in state once it ready
                    promise.then(() => {
                        this.setState({ [codes[index]]: values[index] });
                    });
                });
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };
}

export default withAsyncFonts;
