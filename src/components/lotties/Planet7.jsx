import React from "react";
import planet7 from "../../assets/lotties/planet7";
import Lottie from "lottie-react";

const Planet7 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet7}
      loop={true}
    />
  );
};

export default Planet7;
