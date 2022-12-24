import React, { useState } from "react";
import data from "./data";

function NoteForm() {
  // create state for the note form
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  //store new note values in the formData state
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    data.push(formData);
    console.log(data);
    setFormData({
      title: "",
      body: "",
    });
  }

  return (
    <form
      className="flex flex-col justify-center gap-5 p-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title..."
        onChange={handleChange}
        name="title"
        value={formData.title}
        className="p-4 font-bold"
      />

      <textarea
        name="body"
        id="body"
        cols="30"
        rows="10"
        value={formData.body}
        placeholder="Body..."
        onChange={handleChange}
        className="p-4 border-solid border-2 border-sky-300 rounded-lg"
      ></textarea>

      <input
        type="submit"
        value="Add Note"
        className="bg-green-400 w-32 p-3 rounded-xl text-white font-bold self-center"
      />
    </form>
  );
}

export default NoteForm;
