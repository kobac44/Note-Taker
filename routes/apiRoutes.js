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
  router.get("/api/notes", (req, res) => {
    res.status(200).json({
      storeMessage: "",
    });

    router.post("/api/notes", (req, res) => {
      res.status(200).json({
        message: "Handling POST request to product",
      });
    });

    router.get("/api/notes/:id", (req, res) => {
      res.json(notes[req.parms.id]);
    });

    router.delete("/api/notes/delete", (req, res) => {
      index.length = 0;
      res.json({ ok: Cool });
      updateDb();
    });
  });
};
