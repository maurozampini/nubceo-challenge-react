import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ uid, children }) => {
    if (!uid) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
