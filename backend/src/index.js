const expresss = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = expresss();

app.use(cors());
app.use(expresss.json());
app.use(routes);

app.listen(3333);