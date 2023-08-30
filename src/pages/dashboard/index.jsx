import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseRandomPlanet from "../../hooks/UseRandomPlanet";

const getRandomPosition = () => ({
  top: `${Math.random() * 70}%`,
  left: `${Math.random() * 70}%`,
  transform: `scale(${0.5 + Math.random()})`,
});

const Dashboard = () => {
  const [randomPlanets, setRandomPlanets] = useState(
    Array.from({ length: 10 }, () => <UseRandomPlanet />)
  );

  return (
    <div className="bg-black min-h-screen flex justify-center w-full bg-cover">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {randomPlanets.map((planet, index) => (
          <div key={index} className="relative">
            <Link
              className="flex flex-col items-center justify-center font-bold text-center hover:scale-105 hover:text-orange-600 duration-500 transition-all"
              style={getRandomPosition()}
            >
              {planet}
            </Link>
            <p className="absolute left-1/2 transform -translate-x-1/2 top-full font-bold text-center text-white">
              TEAMWORK
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
