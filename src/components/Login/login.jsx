import React, { useState } from "react";
import { supabase } from "../../client";
import { Link, useNavigate } from "react-router-dom";
import bg from '../../images/auth-background.jpg';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200" style={{backgroundImage:`url(${bg})`,backgroundSize:"cover"}}>
      <div className="bg-white w-96 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-2">
          Don’t have an account?{" "}
          <Link className="text-blue-600" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;