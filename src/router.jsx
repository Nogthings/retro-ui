import { createBrowserRouter } from "react-router-dom";
import Layout from "./shared/layouts/Layout";
import Home from "./views/Home";
import AlertComponents from "./views/AlertComponents/AlertComponents";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: 'application-ui/alert-components', element: <AlertComponents/>}
        ]
    },
]);

export default router;