import React from "react";
import notask from "../img/no-task.png";

const Nodata = () => {
  return (
    <div className="nodata">
      <img src={notask} alt="no data icon" />
      <div className="nodata__wrapper">
        <h3>No Data</h3>
        <p>Nothing to show here!</p>
      </div>
    </div>
  );
};

export default Nodata;
