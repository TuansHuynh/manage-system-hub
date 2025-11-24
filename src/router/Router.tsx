import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Admin from "../layout/Admin";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
                children: [

                ]
            },
            {
                path: '/admin',
                element: <Admin />,
                children: [

                ]
            }
        ]
    }])