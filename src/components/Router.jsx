import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../pages/SignIn";
import Messages from "../pages/Messages";

export const router = createBrowserRouter([
    // signin route
    {
        path: '/',
        element: <Navigate to='/signin' replace />
    },

    {
        path: '/signin',
        element: <SignIn />
    },

    // app route
    {
        element: <MainLayout />,
        children: [
            { path: '/messages', element: <Messages /> },
        ]
    }
]);