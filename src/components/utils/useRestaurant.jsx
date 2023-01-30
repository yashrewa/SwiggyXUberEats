import { Params } from "react-router-dom";
import { Fetch_Menu_URL } from "../../constants";
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Fetch_Menu_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  return restaurant;
};
export default useRestaurant;
