import { Link } from 'react-router-dom';
import Sidebar from '../components/commons/Sidebar';

const Home = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.7fr 8.3fr',
      }}
    >
      <Sidebar />

      <div>
        <h1>I'm home page</h1>
        <Link to={'/workspace'}>
          <span>go to workspace</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
