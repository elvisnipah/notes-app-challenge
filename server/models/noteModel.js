const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

noteSchema.plugin(uniqueValidator, {
  message: "failed",
});
module.exports = mongoose.model("note", noteSchema);
