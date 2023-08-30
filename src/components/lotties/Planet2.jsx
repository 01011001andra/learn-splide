import React from "react";
import planet2 from "../../assets/lotties/planet2";
import Lottie from "lottie-react";

const Planet2 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet2}
      loop={true}
    />
  );
};

export default Planet2;
