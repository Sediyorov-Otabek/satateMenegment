import Nevcart from "@/components/cart/Nevcart";
import { useStateValue } from "@/context/Index";
import React from "react";

const Cart = () => {
  let [data, dispatch] = useStateValue();
  console.log(data.cart);

  return (
    <div>
      <Nevcart data={data.cart} />
    </div>
  );
};

export default Cart;
