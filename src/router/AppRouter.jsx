import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from '../pages/LoginPage/Login';
import BandsView from '../views/bands.view';
import ProfileView from '../views/profile.view';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../stateManagement/actions/auth';

const AppRouter = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={
                    <PublicRoute uid={!!uid} navigateTo='/bands'>
                        <Login />
                    </PublicRoute>
                }
                />
                <Route path="/bands" exact
                    element={
                        <ProtectedRoute uid={!!uid}>
                            <BandsView />
                        </ProtectedRoute>
                    }
                />
                <Route path="/profile"
                    element={
                        <ProtectedRoute uid={!!uid}>
                            <ProfileView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
