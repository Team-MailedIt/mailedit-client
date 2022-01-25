import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import WorkSpace from "./pages/WorkSpace";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workspace" element={<WorkSpace />} />
      </Routes>
    </>
  );
};

export default App;
