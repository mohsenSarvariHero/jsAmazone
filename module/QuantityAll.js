import { cart } from "../data/cart.js";
const showquantity = document.querySelector(".js-qunatity");

export function QuantityAll(){
  let sum = 0;
  cart.forEach((element) => {
    console.log(element);
    sum += element.quantity;
  });
  console.log(sum);
  showquantity.innerHTML = sum;
  const count = document.querySelector(".js-count");
  if (count) {
    count.innerHTML = sum; // Update DOM
  } else {
    console.error("Element with class 'js-count' not found.");
  }
}