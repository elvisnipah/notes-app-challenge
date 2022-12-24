import React, { useEffect, useState } from "react";
import NoteInfo from "../components/NoteInfo";

function Home() {
  const [notes, setNotes] = useState(null);

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
    <div>
      <div className="p-5">
        {notes && notes.map((note) => <NoteInfo key={note._id} note={note} />)}
      </div>
    </div>
  );
}

export default Home;
