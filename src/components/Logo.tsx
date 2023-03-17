import React from "react";
import logo from "../assets/teams.png";

type Props = {
  size?: number;
};

const Logo: React.FC<Props> = ({ size = 6 }) => {

  return (
    <img
      style={{height:size,margin:'4px'}}
      alt="Trio Calls"
      src={logo}
    />
  );
};
export default React.memo(Logo);
