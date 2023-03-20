const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//const routerapi = require('./routes/apiRoutes')(app);
//const routerhtml = require('./routes/htmlRoutes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

