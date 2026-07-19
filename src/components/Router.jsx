import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../pages/SignIn";
import Messages from "../pages/Messages";
import Dashboard from "../pages/Dashboard";
import Teams from "../pages/Teams";
import Tasks from "../pages/Tasks";
import NotFound from "../pages/NotFound";

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
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/teams', element: <Teams /> },
            { path: 'tasks', element: <Tasks /> },
        ]
    },

    {
        element: <NotFound />,
        path: '*',
    },
]);