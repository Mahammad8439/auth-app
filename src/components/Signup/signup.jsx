import React, { useState } from "react";
import { supabase } from "../../client";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (fullName.length < 1) {
      alert("Full Name is required.");
      setLoading(false);
      return;
    }
    if (email.length < 1) {
      alert("Email is required.");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Please check your email to confirm your account.");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200" style={{backgroundImage: "url('/images/auth-background.jpg')",backgroundSize:"cover"}}>
      <div className="bg-white w-96 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Signup</h1>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setFullName(e.target.value)}
          />
          

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
            Sign Up
          </button>

          {loading && <p className="text-center mt-2">Signing up...</p>}
        </form>

        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;