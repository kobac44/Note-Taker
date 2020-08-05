//methhods to use and think about
//POST- Create, GET- Read, PUT- Update, DELETE- Delete..
//CRUD
//Need a Router defined
//Need to store information
// const express = require("express");
// const { Router } = require("express");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const { request } = require("http");
// const Notes = require("../db/Notes");

// VIEW ROUTES
// ========================================================

//API Routes - get
router.get("/api/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const notes = JSON.parse(data);

    res.json(notes);
  });
});

//post
router.post("/api/notes", function (req, res) {
  // read the db.json file
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    // parse the data and store to variable
    let noteData = JSON.parse(data);
    // give random id to note when it's saved
    req.body.id = uuid();
    // store the newNote from the POST request to a new variable
    let newNote = req.body;
    console.log(newNote);
    // push the newNote into noteData (it's an array)
    noteData.push(newNote);
    // write file
    fs.writeFile("./db/db.json", JSON.stringify(noteData), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
    // respond to the user with the new note
    res.json(noteData);
  });
});
// retrieve note using a id
router.get("/api/notes/:id", function (req, res) {
  res.json(notes[req.parms.id]);
});

// delete note
router.delete("/api/notes/:id", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    // parse the data and store to variable
    let noteData = JSON.parse(data);
    // give random id to note when it's saved
    // filter note to data
    noteData = noteData.filter(function (note) {
      return note.id !== req.params.id;
    });
    // write file
    fs.writeFile("./db/db.json", JSON.stringify(noteData), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
    // respond to the user with the new note
    res.json(noteData);
  });
});
module.exports = router;
