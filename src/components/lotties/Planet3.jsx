import React from "react";
import planet3 from "../../assets/lotties/planet3";
import Lottie from "lottie-react";

const Planet3 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet3}
      loop={true}
    />
  );
};

export default Planet3
