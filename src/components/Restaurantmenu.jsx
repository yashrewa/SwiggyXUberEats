import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="restaurant-logo">
        <h1>{restaurant.name}</h1>
        <h3>average rating {restaurant.avgRating}</h3>
      </div>
      <div className="cuisines">
        {restaurant?.cuisines.map((cuisine)=>{
            return (<div>{cuisine}</div>)
        })}
      </div>
      <div classname="menu-items">
        <div className="menu-items-list">
        <h1>Menu</h1>
          {Object.values(restaurant?.menu?.items).map((items) => {
            return (
              <div key={items.resId}>
                <div>
                  <div>
                    <div className="item-name-price">
                      <h3>{items.name} </h3>
                      <br />
                      <b>Rs. {items.price / 100}</b> <br />
                    </div>
                    <div className="description">{items.description}</div>
                  </div>
                  <div className="item-img">
                    {!items.cloudinaryImageId ? (
                      <div className="no-image"></div>
                    ) : (
                      <img src={IMG_CDN_URL + items.cloudinaryImageId} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
