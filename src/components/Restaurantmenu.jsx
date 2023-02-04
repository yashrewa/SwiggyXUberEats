import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
  console.log(dispatch);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="grid">
      <div className="bg-black text-white flex justify-start font-ProximaNova">
        <div className="pt-8 pb-8 px-14">
          <div>
            <img
              className="h-40 w-64 ml-24 my-4 rounded-md"
              src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            />
          </div>
        </div>
        <div className="w-auto">
          <div className="max-w-lg font-light pt-12 text-4xl">
            {restaurant.name}
          </div>
          <div className="text-sm font-medium mt-3 text-neutral-300">
            <div>{restaurant.cuisines.join(", ")}</div>
            <div className="pt-2">
              {restaurant.locality + ", " + restaurant.area}
            </div>
            <div className="flex justify-between pt-4 font-semibold text-base">
              <div className="text-white font-medium pr-8 border-neutral-600 border-r-2">
                ★ {restaurant.avgRating}
                <div className="text-xs mt-1 text-neutral-300 font-normal">
                  {restaurant.totalRatingsString}
                </div>
              </div>
              <div className="px-8 border-neutral-600 border-r-2">
                <div className="text-white font-medium">
                  {restaurant.sla.slaString}
                </div>
                <div className="text-xs mt-1 text-neutral-300 font-normal">
                  Delivery Time
                </div>
              </div>
              <div className="px-8 border-neutral-600 border-r-2">
                <div className="text-white font-medium">
                  {restaurant.costForTwo / 100}
                </div>
                <div className="text-xs mt-1 text-neutral-300 font-normal">
                  Cost for two
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div classname="px-80 justify-center">
          {Object.values(restaurant?.menu?.items).map((items) => {
            return (
              <div className="pt-8 " key={items.resId}>
                <div className="flex border-b-2 border-neutral-300 justify-between mt-4 pb-4 w-5/12 mx-80">
                  <div>
                    <div className="item-name-price">
                      <div className="text-lg">{items.name} </div>
                      <div className="text-base text-neutral-700">
                        ₹ {items.price / 100}
                      </div>

                      <br />
                    </div>
                    <div className="pt-1 w-3/5 tracking-tight text-neutral-400">
                      {items.description}
                    </div>
                  </div>
                  <div>
                    {!items.cloudinaryImageId ? (
                      <div className="w-28 h-24"></div>
                    ) : (
                      <img
                        className="w-28 h-24 z-0 border rounded-md"
                        src={IMG_CDN_URL + items.cloudinaryImageId}
                      />
                    )}
                    <button
                      className="bg-green-500 mx-4 p-0.5 rounded-md absolute z-50 text-white border-2 border-neutral-300"
                      onClick={() => handleAddItem(items)}
                    >
                      add item
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-6/12 h-screen sticky top-0">
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
