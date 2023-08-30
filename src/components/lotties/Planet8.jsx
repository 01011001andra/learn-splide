import React from "react";
import planet8 from "../../assets/lotties/planet8";
import Lottie from "lottie-react";

const Planet8 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet8}
      loop={true}
    />
  );
};

export default Planet8;
