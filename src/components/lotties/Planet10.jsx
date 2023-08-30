import React from "react";
import planet10 from "../../assets/lotties/planet10";
import Lottie from "lottie-react";

const Planet10 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet10}
      loop={true}
    />
  );
};

export default Planet10;
