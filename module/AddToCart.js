import { saveStorage } from "../data/cart.js";
import { cart } from "../data/cart.js";
export function AddToCart(productId){
  let item = cart.find((item) => item.productId === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
  saveStorage()
}