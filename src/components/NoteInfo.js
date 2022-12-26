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
    <div className="m-3 p-4 bg-slate-200 rounded-lg max-w-lg justify-between flex flex-col gap-2">
      <a
        href={"/" + note._id}
        className="font-bold text-xl text-blue-700 hover:underline"
      >
        {note.title.slice(0, 25)}
      </a>
      <p className="">{note.body.slice(0, 25)}...</p>
      <p className="text-sm">
        Created{" "}
        {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
      </p>
      <p className="text-sm">
        Last Updated{" "}
        {formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true })}
      </p>
      <div className="flex">
        <button
          onClick={handleClick}
          className="px-3 py-2 font-bold rounded-lg bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteInfo;
