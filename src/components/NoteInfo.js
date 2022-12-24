import React from "react";

function NoteInfo({ note }) {
  return (
    <div className="m-3 p-2 bg-slate-200 rounded-lg max-w-lg">
      <p className="font-bold text-xl text-blue-700">{note.title}</p>
      <p>{note.body}</p>
      <p className="text-sm">Created: {note.createdAt}</p>
      <p className="text-sm">Last Update: {note.updatedAt}</p>
      <hr className="" />
    </div>
  );
}

export default NoteInfo;
