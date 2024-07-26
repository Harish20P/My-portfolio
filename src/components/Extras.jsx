import React from "react";
import details from "../Details";
import ExtraBlock from "./ExtraBlock";

function Extras () {
  return (
    <div className="extra">
      <ExtraBlock extra={details.extrCurricularActivities} />
    </div>
  );
};

export default Extras;