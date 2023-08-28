import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "./components/slider";

const Dashboard = () => {
  return (
    <div className="bg-black min-h-screen w-full flex items-center bg-cover">
      <Slider />
    </div>
  );
};

export default Dashboard;
