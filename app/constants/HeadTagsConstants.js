import manifestPath from 'assets/manifest.json';

export const DNS_PREFETCH_RESOURCES = [
    '//fonts.googleapis.com',
    '//google-analytics.com',
    '//www.google-analytics.com'
];

export const DEFAULT_META_TAGS = [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
];

export const DEFAULT_LINK_TAGS = [
    { rel: 'manifest', href: manifestPath },
    { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto+Mono:300,400,700' },
    ...(DNS_PREFETCH_RESOURCES.map((resource) => ({
        rel: 'dns-prefetch',
        href: resource
    })))
];

if (__PROD__) {
    DEFAULT_LINK_TAGS.push({
        rel: 'stylesheet',
        href: '/bundle.css'
    });
}
