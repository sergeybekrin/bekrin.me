import { initialize, set, pageview } from 'react-ga';

/**
 * @param {string} id
 */
export function initializeGA (id) {
    initialize(id, {
        debug: __DEV__
    });
}

/**
 * @param {string} path
 */
export function trackGA (path = window.location.pathname) {
    set({ page: path });
    pageview(path);
}
