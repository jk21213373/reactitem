// import Layout from "../pages/Layout";
import { Layout } from "antd";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from '../components/AuthRoute'


const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,

    },
    {
        path: "/login",
        element: <Login />
    },
]);

// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );
export default router;