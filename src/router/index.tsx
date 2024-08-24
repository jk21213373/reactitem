// import Layout from "../pages/Layout";
import Login from "../pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/login",
        element: <Login></Login>
    },
]);

// createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
// );
export default router;