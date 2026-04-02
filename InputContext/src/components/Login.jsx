import React,{useState , useContext} from "react";
import UserContext from "../Context/UserContext";

function Login({ onNewUser }){

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const normalized = username.trim().toLowerCase();
        if (!normalized.endsWith('@gmail.com')) {
            setError('Username must end with @gmail.com');
            return;
        }
        setError('');
        setUser({ username: normalized, password });
    }

    return (
    <>
      <div>
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Login
      </h2>

      {error && (
        <p className="text-sm text-red-500 mb-2 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mr-80 font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm mr-80 font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        New user?{' '}
        <button
          type="button"
          onClick={onNewUser}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Create an account
        </button>
      </p>
    </div>
    </>
)
}

export default Login
