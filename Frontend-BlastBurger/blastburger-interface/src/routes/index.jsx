import { createBrowserRouter } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/session',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
]);  // <--- Error here 


