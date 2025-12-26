import AuthRoutes from '@modules/auth/routes';
import ErrorRoute from '@modules/error/routes';
import HomeRoutes from '@modules/home/routes';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([AuthRoutes, ...HomeRoutes, ErrorRoute]);

export default router;
