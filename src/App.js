import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col grow">
      <Header />
      <Body />
    </div>
  );
}

export default App;
