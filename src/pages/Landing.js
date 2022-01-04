import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>I'm landing page</h1>
      <Link to={'/home'}>
        <span>go to home</span>
      </Link>
    </div>
  );
};

export default Landing;
