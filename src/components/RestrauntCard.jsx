import { IMG_CDN_URL } from "../constants"

export default RestrauntCard= ({name, cuisines, cloudinaryImageId, avgRating, deliveryTime, costForTwo, aggregatedDiscountInfo, coupon}) =>{
    return(
      <div className="p-8 block justify-between border-2 border-white border-solid hover:border-[#d3d5df] hover:shadow-lg ease-linear duration-200">
        <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId}></img>
        <div className="text-base font-bold break-words">{name}</div>
        <div className="text-[#686b78] text-xs mt-1">{cuisines.join(", ")}</div>
        <div className="text-xs flex justify-between pt-2 shadow-md">
            <span className="bg-green-500 text-white rounded-sm p-[1px] px-[2px]" >{avgRating} <span className="text-sm">✩</span></span>
            <div>{deliveryTime} mins</div>
            <div>{costForTwo/100} for two</div>
        </div>
        <div className="flex border-t-white border-t-solid mt-2 text-[#8a584b] items-center font-semibold ">
          <div className="font-normal">{aggregatedDiscountInfo.header} | Use: {coupon[Math.floor(Math.random() * coupon.length)]}</div>
        </div>

        
      </div>
    )
  }

  