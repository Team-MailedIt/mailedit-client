import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import WorkSpace from "./pages/WorkSpace";
import SelectTemplateProvider from "./contexts/SelectTemplateContext";
import ContentProvider from "./contexts/ContentContext";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <SelectTemplateProvider>
        <ContentProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/workspace" element={<WorkSpace />} />
          </Routes>
        </ContentProvider>
      </SelectTemplateProvider>
    </AuthProvider>
  );
};

export default App;
