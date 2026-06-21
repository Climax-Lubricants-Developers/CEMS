import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
    const { user, role, loading } = useAuth();

    if (loading) {
        return <div>Loadind authentication...</div>;
    }

    if (!user) {
        return <Navigate to="login" replace />;
    }

    if (allowedRoles && (!role || !allowedRoles.includes(roles))) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;