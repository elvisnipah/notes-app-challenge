const express = require("express");
const router = express.Router();

const {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote,
} = require("../controllers/noteController");

//GET a single note
router.get("/:id", getNote);

//GET all notes
router.get("/", getNotes);

//POST a new note
router.post("/", createNote);

//DELETE a note
router.delete("/:id", deleteNote);

//UPDATE a note
router.patch("/:id", updateNote);

module.exports = router;
