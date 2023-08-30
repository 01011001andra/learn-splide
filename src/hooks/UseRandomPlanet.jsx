import React from "react";
import Planet1 from "../components/lotties/Planet1";
import Planet2 from "../components/lotties/Planet2";
import Planet3 from "../components/lotties/Planet3";
import Planet4 from "../components/lotties/Planet4";
import Planet5 from "../components/lotties/Planet5";
import Planet6 from "../components/lotties/Planet6";
import Planet7 from "../components/lotties/Planet7";
import Planet8 from "../components/lotties/Planet8";
import Planet9 from "../components/lotties/Planet9";
import Planet10 from "../components/lotties/Planet10";

const UseRandomPlanet = () => {
  const planetComponents = [
    Planet1,
    Planet2,
    Planet3,
    Planet4,
    Planet5,
    Planet6,
    Planet7,
    Planet8,
    Planet9,
    Planet10,
  ];
  const randomIndex = Math.floor(Math.random() * planetComponents.length);
  const RandomPlanetComponent = planetComponents[randomIndex];

  return <RandomPlanetComponent />;
};

export default UseRandomPlanet;
