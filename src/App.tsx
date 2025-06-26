import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OutSideClick from "./components/OutSideClick";
import UseLocalStorage from "./components/UseLocalStorage";
import UseDebounce from "./components/UseDebounce";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/out-side-click" element={<OutSideClick />} />
          <Route path="/local-storage" element={<UseLocalStorage />} />
          <Route path="/debounce" element={<UseDebounce />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
