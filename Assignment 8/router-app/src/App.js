import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Input from "./Input";
import Display from "./Display";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Input
              setName={setName}
              setBranch={setBranch}
              setAge={setAge}
              setCity={setCity}
            />
          }
        />

        <Route
          path="/display"
          element={
            <Display
              name={name}
              branch={branch}
              age={age}
              city={city}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;