const express = require("express");
const path = require("path");
const fs = require("fs");
let db = require("../db/db.json");


module.exports = function (app) {
  
  app.get("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.json(JSON.parse(data))
      }
    });
  });
  
  app.post("/api/notes", (req, res) => {
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