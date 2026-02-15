import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    if (!user)
        return (
            <div className="text-center text-gray-600 py-4">
                <p className="text-lg font-medium">Please Login to Continue</p>
            </div>
        );
    return (
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Welcome Back 👋
            </h2>
            <p className="text-lg text-indigo-600 font-medium">
                {user.username}
            </p>
        </div>
    );
}

export default Profile