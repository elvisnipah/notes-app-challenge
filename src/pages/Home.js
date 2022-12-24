import React, { useEffect, useState } from "react";

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
    <div className="font-bold p-5">
      {notes && notes.map((note) => <p key={note._id}>{note.title}</p>)}
    </div>
  );
}

export default Home;
