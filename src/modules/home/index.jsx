import { Outlet } from 'react-router-dom';
import NavBar from './components/nav-bar';
import './home.scss';

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Home;
