import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from './authRoutes';
import DashboardRoutes from './dashboardRoutes';

const Router = createBrowserRouter([AuthRoutes, ...DashboardRoutes]);

export default Router;
