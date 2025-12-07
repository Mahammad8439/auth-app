import React, { useEffect, useState } from "react";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      console.log(data);
      if (!data.user) navigate("/login");
      setUser(data.user);
    });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        Welcome, {user.user_metadata.full_name} 👋
      </h1>

      <button
        className="mt-4 bg-red-500 text-white p-2 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;