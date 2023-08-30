import React from "react";
import planet4 from "../../assets/lotties/planet4";
import Lottie from "lottie-react";

const Planet4 = () => {
  return (
    <Lottie
      style={{ height: "100px", width: "100px" }}
      animationData={planet4}
      loop={true}
    />
  );
};

export default Planet4;
