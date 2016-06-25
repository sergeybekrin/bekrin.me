import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack/development';

const app = express();
const compiler = webpack(config);
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app'));

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (request, response) => {
	response.render('template', {
		html: '',
		dev: true,
		lang: 'en',
		assets: []
	});
});

app.listen(PORT, (error) => {
	if (error) {
		console.error(error);
		return;
	}

	console.log(`Listening at http://localhost:${PORT}`);
});
