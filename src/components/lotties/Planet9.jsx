import React from "react";
import planet9 from "../../assets/lotties/planet9";
import Lottie from "lottie-react";

const Planet9 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet9}
      loop={true}
    />
  );
};

export default Planet9;
