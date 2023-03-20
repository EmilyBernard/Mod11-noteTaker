const fs = require("fs");
const db = require("../db/db.json");
const express = require("express");

module.exports = function (app) {
  app.get("/api/notes", function (res) {
    res.json(db);
  });
  app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    const id = db.length.toString();
    newNote.id = id;
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
      if (err) throw err;
    });
    res.json(db);
  });
app.delete("/api/notes/:id", function (req, res) {
    const noteId = req.params.id;
    const newId = 0;
    db = db.filter((note) => {
      return note.id != noteId;
    });
    for (note of db) {
      note.id = newId.toString();
      newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
  });
};