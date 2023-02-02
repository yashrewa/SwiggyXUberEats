import RestrauntCard from "./RestrauntCard";
import { useState, useEffect, useContext, React } from "react";
import Shimmer from "./Shimmer";
import { Link, useFetcher } from "react-router-dom";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";
import Theme from "./utils/Theme";
import { useGeolocated } from "react-geolocated";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restraunt) =>
    restraunt.data.name.includes(searchInput)
  );
  return filterData;
}

export default Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fetchedcoords, setFetchedCoords] = useState({
    latitude: 28.6448,
    longitude: 77.216721,
  });
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const { username, email, DOB } = user;
  const { theme, setTheme } = useContext(Theme);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

    
  useEffect(() => {
    if ( coords?.latitude && coords?.longitude) {
      return getRestaurants({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }
    getRestaurants();
  }, [coords]);


  async function getRestaurants(
      geoLocation = {
        latitude: 28.6448,
        longitude: 77.216721,
      }
    ) {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
            geoLocation.latitude +
            "&lng=" +
            geoLocation.longitude +
            "&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
        console.log(json.data)
      } catch (error) {
        let json = error.json();
        console.log(json.status)
      }
  }

  const useStatus = useOnline();

  if (!useStatus) {
    return <div>Look's Link You're Offline</div>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap justify-center">
        <input
          type="text"
          className="border-2 w-1/4 border-[#d3d5df] border-solid"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-green-500 rounded-sm p-1 w-1/16 text-white text-base"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {theme === "light" ? (
          <button
            className="border border-black border-10 p-2 px-6 m-2"
            onClick={() => {
              setTheme("dark");
            }}
          >
            dark
          </button>
        ) : (
          <button
            className="border bg-blue-900 border-black border-10 p-2 px-6 m-2"
            onClick={() => {
              setTheme("light");
            }}
          >
            light
          </button>
        )}
        {/* <button onClick={()=>setTheme({username: "set"})}>Hey</button> */}
        <input value={user.username} onChange={(e)=> setUser({username: e.target.value}) }></input>
      </div>
      <div className="flex flex-wrap justify-around p-4 font-Sans-serif">
        {filteredRestaurants.forEach((element) => {
          data = element?.data;
          data.coupon = ["TRYNEW", "WELCOME50"];
          return data;
        })}
        {filteredRestaurants.map((restaurant) => {
          return (
            <div
              className="basis-auto lg:basis-1/4 p-6 px-8"
              key={restaurant.data.id}
            >
              <Link to={"/restaurantmenu/" + restaurant.data.id}>
                <RestrauntCard {...restaurant.data} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
