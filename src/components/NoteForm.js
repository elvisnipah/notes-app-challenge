import React, { useState } from "react";

function NoteForm() {
  // create state for the note form
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [error, setError] = useState(null);

  //store new note values in the formData state
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [isError, setIsError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsError(true);
    }

    if (response.ok) {
      setFormData({
        title: "",
        body: "",
      });
      setError(null);
      setIsError(false);
      console.log("new note added");
      window.location.href = "/";
    }
  }

  const ErrorMessage = () => {
    return (
      <div className="self-center border-2 border-red-600 text-red-600 p-2 text-center">
        {error === "note validation failed: title: failed"
          ? "Note title already exists. Please enter a unique title"
          : error}
      </div>
    );
  };

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
        className="bg-green-400 w-32 p-3 rounded-xl text-white font-bold self-center hover:border-emerald-900 hover:bg-green-700 hover:cursor-pointer"
      />

      {isError && <ErrorMessage />}
    </form>
  );
}

export default NoteForm;
