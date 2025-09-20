import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  // Navigate back to the main website or landing page
  const handleBack = () => {
    window.location.href = "http://localhost:5173"; // Redirect to main webpage
  };

  // Navigate to the signup page
  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  // State variables for user inputs and UI feedback
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle login process
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      setSuccess("");
      return;
    }

    try {
      setLoading(true);
      setSuccess("");
      setError("");

      const response = await axios.post(`http://localhost:8080/login`, {
        email: email.trim(),
        password: password.trim(),
      }, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000,
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        setSuccess("Successfully Logged In");
        setError("");

        navigate(`/dashboard`);
      } else {
        setError("Invalid credentials. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
        
      } else {
        setError("An error occurred while trying to log in. Please try again later.");
      }
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-pink-400 flex flex-col items-center justify-center px-4 py-12">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="self-start mb-8 cursor-pointer flex items-center space-x-2 text-white bg-purple-900 hover:bg-purple-800 px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105"
      >
        <i className="fas fa-arrow-left"></i>
        <span>Back</span>
      </button>

      {/* Login Card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-8 text-center">Login</h2>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 rounded-md bg-green-100 text-green-800 font-semibold flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>{success}</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-100 text-red-700 font-semibold flex items-center space-x-2">
            <i className="fas fa-exclamation-circle"></i>
            <span>{error}</span>
          </div>
        )}

        {/* Email Input */}
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
          Email
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg mb-6 focus-within:ring-2 focus-within:ring-purple-500">
          <div className="px-3 text-purple-600">
            <i className="fas fa-envelope"></i>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 outline-none rounded-r-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Password Input */}
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
          Password
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg mb-8 focus-within:ring-2 focus-within:ring-purple-500">
          <div className="px-3 text-purple-600">
            <i className="fas fa-lock"></i>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 outline-none rounded-r-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-3 cursor-pointer rounded-full font-semibold text-white transition-transform transform ${
            loading ? 'bg-purple-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <a
            href="#"
            onClick={handleSignup}
            className="text-purple-700 font-semibold hover:underline cursor-pointer"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}