import { useStateValue } from "@/context/Index";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Products = ({ data, title }) => {
  const navigate = useNavigate();
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div
      className="border rounded-lg flex flex-col justify-between p-3 mb-7 relative"
      key={product.id}
    >
      <div className="w-full h-60">
        <img
          className="w-full h-full object-contain duration-300 hover:scale-105"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>{product.title}</p>
        <strong>{product.price} USD</strong>
        <div className="absolute top-[5px] right-[10px]">
          <button>
            <AiOutlineHeart
              className="hover:bg-red-500"
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: product });
              }}
            />
          </button>
        </div>
        <button
          className="border bg-slate-400 py-1 text-[#fff] "
          onClick={() => {
            navigate(`/Cart`);
            dispatch({ type: "CART", payload: product });
          }}
        >
          qo'shish
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
