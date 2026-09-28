import { BrowserRouter, Routes, Route } from "react-router";
import Input from "./input";
import Display from "./display";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
