import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar';
import './Home.scss';

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Home;
