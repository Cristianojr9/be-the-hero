const expresss = require('express');
const routes = require('./routes');

const app = expresss();

app.use(expresss.json());
app.use(routes);

app.listen(3333);