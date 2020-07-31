//methhods to use and think about
//POST- Create, GET- Read, PUT- Update, DELETE- Delete..
//CRUD
//Need a Router defined
//Need to store information
const express = require("express");
const router = require("express").Router();
// const store = require("./../db/store");

module.exports = (app) => {
  // const index = require("./public/assets/js/index");

  // getNotes * saveNotes * deleteNotes
  //API Routes
  app.get("/api/notes", function (req, res) {
    res.status(200).json({
      storeMessage: "",
    });

    app.post("/api/notes", function (req, res) {
      res.status(200).json({
        message: "Handling POST request to product",
      });
    });

    app.get("/api/notes/:id", function (req, res) {
      res.json(notes[req.parms.id]);
    });

    app.delete("/api/notes/delete", function (req, res) {
      index.length = 0;
      res.json({ ok: Cool });
      updateDb();
    });
  });
};
module.exports = router;
