const express = require("express");
const path = require("path");
const fs = require("fs");
let db = require("../db/db.json");


module.exports = function (app) {
  //GET
  app.get("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.json(JSON.parse(data))
      }
    });
  });

  //POST
  app.post("/api/notes", (req, res) => {
    console.log(req.body);
      const addNote = req.body;
      const id = db.length.toString();
      addNote.id = id;
    db.push(addNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
      if (err) {
        console.error(err);
      } else {
        res.json(JSON.parse(data))
      }
    });
    res.json(db);
  });

  //DELETE
  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let id = 0;
    db = db.filter((note) => {
      return note.id != noteId;
    });
    for (note of db) {
      note.id = id.toString();
      id++;
    }
   //let db = JSON.parse(fs.readFileSync('./db/db.json'))
    //let deleteNote = db.filter(item => item.id !== req.params.id); 
       
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);        
    })
};

module.exports = function (app) {
  app.get("/notes", function (req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};