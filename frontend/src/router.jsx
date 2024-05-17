import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div class="text-center text-3xl font-bold py-4 bg-gray-200">E-Commerce</div>
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
    {
        path: "/change-password",
        element: <ChangePassword />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/user-details",
        element: <UserDetails />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
])

export default router