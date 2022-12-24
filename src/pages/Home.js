import React, { useEffect, useState } from "react";
import NoteInfo from "../components/NoteInfo";

function Home() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="p-5 flex flex-col grow">
      {notes.length < 1 && (
        <div className="flex justify-center items-center text-4xl text-center grow text-gray-400">
          No notes available to display. <br /> Click the button above to get
          started
        </div>
      )}
      {notes && notes.map((note) => <NoteInfo key={note._id} note={note} />)}
    </div>
  );
}

export default Home;
