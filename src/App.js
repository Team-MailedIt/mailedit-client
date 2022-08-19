import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import AuthProvider from './contexts/AuthContext';
import ContentProvider from './contexts/ContentContext';
import SelectTemplateProvider from './contexts/SelectTemplateContext';

import Landing from './pages/Landing';
const Home = lazy(() => import('./pages/Home'));
const WorkSpace = lazy(() => import('./pages/WorkSpace'));

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
