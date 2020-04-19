import React from "react";

const DataBox = (props) => {
  console.log("props", props);
  return (
    <div className="data-box">
      <div>{props.p1}</div>
      <div>{props.p2}</div>
      <div>{props.p3}</div>
    </div>
  );
};

export default DataBox;
