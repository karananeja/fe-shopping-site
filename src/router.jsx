import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from '@modules/auth/routes';
import HomeRoutes from '@modules/home/routes';
import ErrorRoute from '@modules/error/routes';

const router = createBrowserRouter([AuthRoutes, ...HomeRoutes, ErrorRoute]);

export default router;
