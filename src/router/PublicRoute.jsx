import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ uid, children, navigateTo }) => {
    if (uid) {
        return <Navigate to={navigateTo} replace />;
    }

    return children;
};

export default PublicRoute;
