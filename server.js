/* eslint-disable no-console */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import load from 'webpack-to-memory';
import clientConfig from './webpack/development';
import serverConfig from './webpack/development.server';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const compiler = webpack(clientConfig);
const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

// Build webpack bundle and render static markup
// on each request to achieve same result as
// static html output for production build
app.use((request, response) => {
    load(webpack(serverConfig)).then((files) => {
        const render = files[serverConfig.output.filename];

        const locals = {
            path: request.url,
            publicPath: clientConfig.output.publicPath
        };

        render(locals, (error, output) => {
            if (error) {
                response.send(`Error building bundle:\n${error}`);
                return;
            }

            response.send(output);
        });
    });
});

app.listen(PORT, HOST, (error) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(`Listening at http://${HOST}:${PORT}`);
});
