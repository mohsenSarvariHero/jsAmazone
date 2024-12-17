
import { cart } from "../../data/cart.js";
import { renderCart } from "./renderCart.js";
export function setupDeleteButtons() {
    let deleteBtn = document.querySelectorAll(".js-delete");
    deleteBtn.forEach((button) => {
        button.addEventListener("click", () => {
            const cartId = button.dataset.cartId;

            // Remove the item from the cart
            const cartIndex = cart.findIndex((item) => item.productId === cartId);
            if (cartIndex > -1) {
                cart.splice(cartIndex, 1); // Remove the item
                console.log(`Removed product with ID: ${cartId}`);
                renderCart(); // Re-render the cart
            }
        });
    });
}