import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Note() {
  const [currentNote, setCurrentNote] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch("/api/notes/" + id);
      const json = await response.json();

      if (response.ok) {
        setCurrentNote(json);
      }
    };

    fetchNote();
  }, [id]);

  function handleEdit() {
    window.location.href = id + "/edit";
  }

  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="text-2xl text-blue-700 font-bold">
        {currentNote.title}
      </div>
      <div className="overflow-auto max-w-3xl">{currentNote.body}</div>
      <button
        className="bg-blue-700 mt-3 p-3 font-bold rounded-lg w-[120px] text-white"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
}

export default Note;
