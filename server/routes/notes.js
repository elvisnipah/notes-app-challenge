const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ msg: "POST a new note" });
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
