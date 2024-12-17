import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { setupDeleteButtons } from "./utils/setupDeleteButtons.js";
import { formatCurrency } from "./utils/money.js";
import { renderCart } from "./utils/renderCart.js";

renderCart()
// renderCart()
// let deleteBtn = document.querySelector(".js-delete");
// console.log(deleteBtn)
// console.log(deleteBtn.dataset)


// deleteBtn.addEventListener("click",()=>{
//     // console.log(deleteBtn.dataset.cartId)
//     let cartId = deleteBtn.dataset.cartId;
//     console.log(cartId)
//     cart = cart.filter((item) => item.productId !== cartId)
//     console.log(cart)
//     renderCart()
// })

// function setupDeleteButtons() {
//     let deleteBtn = document.querySelectorAll(".js-delete");
//     deleteBtn.forEach((button) => {
//         button.addEventListener("click", () => {
//             const cartId = button.dataset.cartId;

//             // Remove the item from the cart
//             const cartIndex = cart.findIndex((item) => item.productId === cartId);
//             if (cartIndex > -1) {
//                 cart.splice(cartIndex, 1); // Remove the item
//                 console.log(`Removed product with ID: ${cartId}`);
//                 renderCart(); // Re-render the cart
//             }
//         });
//     });
// }
setupDeleteButtons(renderCart)
renderCart()