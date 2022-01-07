import { Route, Routes } from 'react-router';
import Landing from './pages/Landing';
import Home from './pages/Home';
import WorkSpace from './pages/WorkSpace';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workspace" element={<WorkSpace />} />
      </Routes>
    </div>
  );
};

export default App;
