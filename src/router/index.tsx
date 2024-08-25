import Layout from "../pages/Layout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from '../components/AuthRoute'
import Publish from '../pages/Publish'
import Article from '../pages/Article'
import Home from '../pages/Home'
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,
        //element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'article',
                element: <Article />,
            },
            {
                path: 'publish',
                element: <Publish />,
            },
        ]
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