import { Route, Routes } from 'react-router';
import Landing from './pages/Landing';
import Home from './pages/Home';
import WorkSpace from './pages/WorkSpace';
import Sidebar from './components/commons/Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {/* 일단은 sidebar 전체 적용되게 했는데 세부적으로 구현 들어가면 각 페이지별로 사이드바 다르게 구현해서 넣으면 될 듯 */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workspace" element={<WorkSpace />} />
      </Routes>
    </div>
  );
};

export default App;
