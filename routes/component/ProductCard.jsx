import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const ProductCard = ({ _id, name, price, category, image, description }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ id: _id, name, price, category, image, description }));
  };

  return (
    <div className="w-57.5 h-80 rounded-[15px] border border-gray-300 p-4 overflow-hidden relative cursor-pointer flex flex-col">
      <div className="w-full h-37.5 overflow-hidden rounded-[15px] border border-gray-300">
        <img src={image} alt="" className="w-full h-full object-fill" />
      </div>
      <div className="pt-1 flex flex-col grow">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-sm py-1">
          {description.split(" ").slice(0, 4).join(" ") + "..."}
        </div>
        <div className="absolute top-4 right-4 text-white bg-gray-900 px-3 py-0.5 rounded text-sm">
          {category}
        </div>
        <div className="font-bold">&#8377; {price}</div>
        <button
          className="w-full py-1.5 border-none text-white bg-gray-900 rounded mt-auto hover:cursor-pointer"
          onClick={handleAddItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
