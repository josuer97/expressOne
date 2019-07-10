const srExpress = require('express');
const app = express();
app.use(srExpress.json());
const movie = require('./route/movie');

app.use('/movies', movie);

app.listen(8081, '0.0.0.0');