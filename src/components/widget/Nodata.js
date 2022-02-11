import React from "react";

const Nodata = () => {
  return (
    <div className="nodata">
      <img src="../../images/no-task.png" alt="no data icon" />
      <div className="nodata__wrapper">
        <h3>No Data</h3>
        <p>Nothing to show here!</p>
      </div>
    </div>
  );
};

export default Nodata;
