const path = require("path");

module.exports = function (app) {
  app.get("/notes", function (res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};