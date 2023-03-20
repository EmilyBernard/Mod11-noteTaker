const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

const routerapi = require('./routes/apiRoutes')(app);
const routerhtml = require('./routes/htmlRoutes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

