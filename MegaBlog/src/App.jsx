import { useEffect, useState } from 'react';
import { login, logout } from './store/authSlice';
import { useDispatch } from 'react-redux';
import authSevice from './appwrite/auth';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authSevice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <>
      <Header />
      <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to MegaBlog</h1>
        <main>
          {/* Main content would go here */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  ) : (
    <div className="bg-gray-100 text-gray-800 w-full h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}

export default App
