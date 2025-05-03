import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!email || !password || (!isLogin && !name)) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // Login API
        const res = await axios.post('http://localhost:4000/api/user/login', {
          email,
          password,
        });
        alert('Logged in successfully!');
        console.log(res.data);
      } else {
        // Signup API
        const res = await axios.post('http://localhost:4000/api/user/register', {
          name,
          email,
          password,
        });
        alert('Signed up successfully!');
        console.log(res.data);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center border-b-2 pb-2 border-black inline-block">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-400 px-4 py-2 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Error message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        <div className="text-sm text-gray-600 flex justify-between">
          {isLogin && <a href="#" className="hover:underline">Forgot password?</a>}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="hover:underline text-blue-600"
          >
            {isLogin ? 'Create New Account' : 'Already have an account? Login'}
          </button>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={`w-full ${loading ? 'bg-gray-400' : 'bg-black'} text-white py-2 mt-2 hover:bg-gray-800`}
          disabled={loading}
        >
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
