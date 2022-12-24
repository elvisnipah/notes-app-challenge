import React from "react";
import NoteForm from "./NoteForm";
import data from "./data";

function Body() {
  console.log(data);
  return (
    <div>
      {/* if there are no notes, render this div informing user of no notes */}
      {!data && (
        <div className="text-xl text-gray-400 flex justify-center items-center p-5 text-center">
          No notes to display currently. <br /> Click the button above to start
          a new note.
        </div>
      )}
      {data && <NoteForm />}
    </div>
  );
}

export default Body;
