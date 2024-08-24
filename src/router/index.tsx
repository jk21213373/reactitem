// import Layout from "../pages/Layout";
import { Layout } from "antd";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/layout",
        element: <Layout></Layout>
    },
]);

// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );
export default router;