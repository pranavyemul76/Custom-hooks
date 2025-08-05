import OutSideClick from "./components/OutSideClick";
import UseLocalStorage from "./components/UseLocalStorage";
import UseDebounce from "./components/UseDebounce";
import UseInfiniteScroll from "./components/UseInfiniteScroll";
import UseHorizontalScroll from "./components/UseHorizontalScroll";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./commonComponents/Layout";
import UseIsOnline from "./components/useIsOnline";
import UseDeviceType from "./components/UseDeviceType";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/out-side-click" element={<OutSideClick />} />
            <Route path="/local-storage" element={<UseLocalStorage />} />
            <Route path="/debounce" element={<UseDebounce />} />
            <Route path="/infinite-scroll" element={<UseInfiniteScroll />} />
            <Route path="device-type" element={<UseDeviceType />} />
            <Route
              path="/horizontal-scroll"
              element={<UseHorizontalScroll />}
            />
            <Route path="/network-status" element={<UseIsOnline />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
