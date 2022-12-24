import React from "react";

function Body() {
  const notes = false;
  return (
    <div>
      {/* if there are no notes, render this div informing user of no notes */}
      {!notes && (
        <div className="text-xl text-gray-400 flex justify-center items-center p-5 text-center">
          No notes to display currently. <br /> Click the button above to start
          a new note.
        </div>
      )}
    </div>
  );
}

export default Body;
