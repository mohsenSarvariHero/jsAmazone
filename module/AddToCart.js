import { cart } from "../data/cart.js";
export function AddToCart(productId){
  const item = cart.find((item) => item.productId === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}