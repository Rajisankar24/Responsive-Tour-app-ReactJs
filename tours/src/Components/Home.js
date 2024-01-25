import React, { useState } from "react";
import Tours from "./Tours";
import category from "./data";
import Tourtype from "./Tourtype";
const AllTypes = ["All", ...new Set(category.map((x) => x.tourType))];
const Duration = ["Select Tour", ...new Set(category.map((y) => y.duration))];

const Home = () => {
  const [myTours, setMyTours] = useState(category);
  const [myCategories, setMyCategoies] = useState(AllTypes);
  const [myFliterDuration, setMyFilterDuration] = useState(Duration);

  const filterFunction = (types) => {
    if (types === "All") {
      setMyTours(category);
    } else {
      const x = category.filter((val) => val.tourType === types);
      setMyTours(x);
    }
  };

  const filterDuration = (e) => {
    const data = e.target.value;
    if (data === "Select Tour") {
      setMyTours(category);
    } else {
      const selectedItem = category.filter((x) => x.duration == data);
      setMyTours(selectedItem);
    }
  };

  return (
    <div>
      <Tourtype
        typeOfTours={myCategories}
        filterCategory={filterFunction}
        durTypes={myFliterDuration}
        filterDuration={filterDuration}
      />
      <Tours myData={myTours} />
    </div>
  );
};

export default Home;
