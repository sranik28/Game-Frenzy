import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import AllToys from "../pages/AllToys";
import Error from "../components/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddAToys from "../pages/AddAToys";
import MyToys from "../pages/MyToys";
import ViewDetails from "../components/ViewDetails";
import PrivateRouter from "../private/PrivateRoute";
import EditToy from "../components/EditToy.jsx";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-toys',
                element: <AllToys />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/my-toys',
                element: <PrivateRouter><MyToys /></PrivateRouter>
            },
            {
                path: '/add-toys',
                element: <PrivateRouter><AddAToys /></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/edit/:id',
                element: <EditToy />
            },
            {
                path: '/view-details/:id',
                element: <PrivateRouter><ViewDetails /></PrivateRouter>,

            },
        ]
    }
]);

export default Router;