const express = require("express");
const fs = require("fs");
const path = require("path");
let db = require("../db/db.json");

module.exports = function (app) {
  //API GET Requests
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });
  //API POST Requests
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    let id = db.length.toString();
    newNote.id = id;
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function (err) {
      if (err) throw err;
    });
    res.json(db);
  });
};