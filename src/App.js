import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <div className="flex flex-col grow">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-note" element={<NoteForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
