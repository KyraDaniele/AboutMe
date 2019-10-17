const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    compression = require('compression'),
    helmet = require('helmet'),
    app = express();

app.listen(3333, function() {
    console.log('listening on port 3333');
});

app.use(compression());
app.use(helmet());

app.engine('html',es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');