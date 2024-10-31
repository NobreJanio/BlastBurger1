import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import { Menu } from "../containers/Menu";
import { Cart } from '../containers/Cart'
import { Checkout } from '../containers/Checkout'
import { CompletePayment } from '../containers/CompletePayment'



export const router = createBrowserRouter([
    {
        path: '',
        element: <Navigate to="/home" replace />,
    },
    {
        path: '/home',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/session',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
                <Footer />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />
                <Footer />
            </>
        ),
    },
    {
        path: '/checkout',
        element: <Checkout />,
    },
    {
        path: '/completo',
        element: <CompletePayment />,
    },

]);  // <--- Error here 


