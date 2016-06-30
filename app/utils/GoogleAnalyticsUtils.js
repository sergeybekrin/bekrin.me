import ga from 'react-ga';

export function initializeGA () {
	ga.initialize('UA-19088106-7', {
		debug: process.env.NODE_ENV === 'development'
	});
}

export function trackGA (path = window.location.pathname) {
	ga.pageview(path);
}