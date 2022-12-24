const express = require("express");

const Note = require("../models/noteModel");

const router = express.Router();

//GET all notes
router.get("/", (req, res) => {
  res.json({
    msg: "GET all notes",
  });
});

//GET a single note
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single note" });
});

//POST a new note
router.post("/", async (req, res) => {
  const { title, body } = req.body;

  try {
    const note = await Note.create({ title, body });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a note
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a note" });
});

//UPDATE a note
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a note" });
});

module.exports = router;
