import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthGlobally } from '../context/AuthProvide';
import Loader from '../components/Loader';


const PrivateRouter = ({ children }) => {
    const { loading, user } = useAuthGlobally()
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;