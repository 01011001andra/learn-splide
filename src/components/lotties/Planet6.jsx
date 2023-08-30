import React from "react";
import planet6 from "../../assets/lotties/planet6";
import Lottie from "lottie-react";

const Planet6 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet6}
      loop={true}
    />
  );
};

export default Planet6;
