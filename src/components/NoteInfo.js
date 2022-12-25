import React from "react";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function NoteInfo({ note }) {
  async function handleClick() {
    const response = await fetch("/api/notes/" + note._id, {
      method: "DELETE",
    });
    // const json = await response.json();

    if (response.ok) {
      window.location.reload(false);
    }
  }

  return (
    <div className="m-3 p-4 bg-slate-200 rounded-lg max-w-lg justify-between flex flex-col">
      <p className="font-bold text-xl text-blue-700">
        {note.title.slice(0, 25)}
      </p>
      <p className="">{note.body.slice(0, 25)}...</p>
      <p className="text-sm">
        Created{" "}
        {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
      </p>
      <p className="text-sm">
        Last Updated{" "}
        {formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true })}
      </p>
      <div className="flex justify-around">
        <button
          onClick={handleClick}
          className="mt-3 p-3 font-bold rounded-lg self-center  bg-red-600 text-white"
        >
          Delete
        </button>
        <button className="bg-blue-700 mt-3 p-3 font-bold rounded-lg self-center text-white">
          Edit
        </button>
      </div>
      <hr className="" />
    </div>
  );
}

export default NoteInfo;
