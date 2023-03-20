const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const routerapi = require('./routes/apiRoutes')(app);
const routerhtml = require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
}
);