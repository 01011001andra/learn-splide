import React from "react";
import planet1 from "../../assets/lotties/planet1";
import Lottie from "lottie-react";

const Planet1 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet1}
      loop={true}
    />
  );
};

export default Planet1;
