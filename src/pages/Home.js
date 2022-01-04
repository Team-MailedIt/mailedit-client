import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>I'm home page</h1>
      <Link to={'/workspace'}>
        <span>go to workspace</span>
      </Link>
    </div>
  );
};

export default Home;
