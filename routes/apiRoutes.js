//methhods to use and think about
//POST- Create, GET- Read, PUT- Update, DELETE- Delete..
//CRUD
//Need a Router defined
//Need to store information
const express = require("express");

// const store = require("./../db/store");
const app = express();

const PORT = process.env.PORT || 8080;

module.exports = (app) => {
  // const index = require("./public/assets/js/index");

  // getNotes * saveNotes * deleteNotes
  //API Routes
  app.get("/api/notes", (req, res) => {
    res.status(200).json({
      storeMessage: "",
    });

    app.post("/api/notes", (req, res) => {
      res.status(200).json({
        message: "Handling POST request to product",
      });
    });

    app.get("/api/notes/:id", (req, res) => {
      res.json(notes[req.parms.id]);
    });

    app.delete("/api/notes/delete", (req, res) => {
      index.length = 0;
      res.json({ ok: Cool });
      updateDb();
    });
  });
};
