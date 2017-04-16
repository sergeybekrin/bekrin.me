import Analytics from 'react-ga';

/**
 * @param {string} id - Google Analytics id
 */
export function initializeAnalytics(id) {
    Analytics.initialize(id, { debug: __DEV__ });
}

/**
 * @param {string} page - path to send to GA
 */
export function trackPageView(page = window.location.pathname) {
    Analytics.set({ page });
    Analytics.pageview(page);
}
