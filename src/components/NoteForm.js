import React, { useState } from "react";

function NoteForm() {
  // create state for the note form
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }

  return (
    <form className="flex flex-col justify-center gap-5 p-5">
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
        value={formData.value}
        placeholder="Body..."
        className="p-4"
      ></textarea>
    </form>
  );
}

export default NoteForm;
