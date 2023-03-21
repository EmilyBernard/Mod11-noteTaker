const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const routerapi = require('./routes/apiRoutes')(app);

// GET route for notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  
// GET route for homepage
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
}
);