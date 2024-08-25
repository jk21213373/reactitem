import Layout from "../pages/Layout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";
// import Publish from '../pages/Publish'
// import Article from '../pages/Article'
// import Home from '../pages/Home'
import AuthRoute from '../components/AuthRoute'
import { lazy, Suspense } from "react"

const Home = lazy(() => import('../pages/Home'))
const Article = lazy(() => import('../pages/Article'))
const Publish = lazy(() => import('../pages/Publish'))

const router = createBrowserRouter([
    {
        path: "/",
        // element: <AuthRoute><Layout /></AuthRoute>,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Suspense fallback={'加载中'}><Home /></Suspense>,
            },
            {
                path: 'article',
                element: <Article />,
            },
            {
                path: 'publish',
                element: <Publish />,
            },
        ],

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