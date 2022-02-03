import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import SelectTemplateProvider from "./contexts/SelectTemplateContext";
import ContentProvider from "./contexts/ContentContext";
import AuthProvider from "./contexts/AuthContext";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const WorkSpace = lazy(() => import("./pages/WorkSpace"));

const App = () => {
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};

export default App;
