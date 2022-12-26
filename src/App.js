import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteForm from "./components/NoteForm";
import Note from "./pages/Note";
import UpdateNote from "./pages/UpdateNote";

function App() {
  return (
    <div className="flex flex-col grow">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-note" element={<NoteForm />} />
          <Route path="/:id" element={<Note />} />
          <Route path="/:id/edit" element={<UpdateNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
