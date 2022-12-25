import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Note(props) {
  const [currentNote, setCurrentNote] = useState("");
  // console.log(currentNote);
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch("/api/notes/" + id);
      const json = await response.json();

      if (response.ok) {
        setCurrentNote(json);
        console.log(json);
      }
    };

    fetchNote();
  }, [id]);

  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="text-2xl text-blue-700 font-bold">
        {currentNote.title}
      </div>
      <div className="overflow-x-scroll">{currentNote.body}</div>
      <button className="bg-blue-700 mt-3 p-3 font-bold rounded-lg self-center text-white">
        Edit
      </button>
    </div>
  );
}

export default Note;
