import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between p-5 bg-slate-200">
      <p className="text-xl text-blue-700 font-bold">Notes App</p>
      <button className="text-white font-bold bg-blue-700 text-xl rounded-lg p-2 px-4 hover:bg-white hover:text-blue-700">
        New Note
      </button>
    </div>
  );
}

export default Header;
