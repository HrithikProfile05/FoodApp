import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [ListOfResturent, setListOfResturent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setListOfResturent(json?.data?.cards || []);
  };

  const filterTopRated = () => {
    const filteredList = ListOfResturent.filter(
      (res) => res?.data?.avgRating > 4
    );
    setListOfResturent(filteredList);
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {ListOfResturent.map((restaurant) => (
          <RestroCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
