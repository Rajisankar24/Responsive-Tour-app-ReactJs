import React from "react";

const Tourtype = ({
  typeOfTours,
  filterCategory,
  durTypes,
  filterDuration,
}) => {
  return (
    <div>
      <div>
        <h1>
          featured <span className="seperate">tours</span>
        </h1>
      </div>
      <div className="btns">
        {typeOfTours.map((type, index) => {
          return (
            <div key={index} className="single-btn">
              <button
                type="submit"
                className="btn"
                onClick={() => filterCategory(type)}
              >
                {type}
              </button>
            </div>
          );
        })}
      </div>
      <div className="drop-div" onChange={filterDuration}>
        <select className="drop-down">
          {durTypes.map((y, index) => {
            return (
              <option value={y} key={index}>
                {y} Days
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Tourtype;
