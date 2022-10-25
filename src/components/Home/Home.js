import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Hello, {user?.displayName ? user?.displayName : "There!"}
            </h1>
            <p className="mb-5">
              We provide some Premium Courses that's change your life
              destination from our Learning Fair.
            </p>
            <p className="text-2xl md:text-4xl font-semi-bold">
              So, Let's explore our Premium Courses...
            </p>
            <button className="btn mt-5 btn-primary">Explore Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
