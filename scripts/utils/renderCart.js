import { products } from "../../data/products.js";
import { setupDeleteButtons } from "./setupDeleteButtons.js";
import { cart } from "../../data/cart.js";
import { formatCurrency } from "./money.js";
export function renderCart(){
    let showCheck = document.querySelector(".js-container");
    showCheck.innerHTML = ""
    cart.forEach((cartItem) => {
        // Find the product that matches the productId from the cart
        let product = products.find((itemProduct) => itemProduct.id === cartItem.productId);
        console.log(product)
        // Check if product is found before proceeding
        if (product) {
            
            
            // Dynamically build the cart item HTML
            showCheck.innerHTML += `
                <div class="cart-item-container">
                    <div class="delivery-date">
                        Delivery date: Tuesday, June 21
                    </div>
    
                    <div class="cart-item-details-grid">
                        <img class="product-image" src="${product.image}" alt="${product.name}">
    
                        <div class="cart-item-details">
                            <div class="product-name">
                                ${product.name}
                            </div>
                            <div class="product-price">
                               $${formatCurrency(product.priceCents)} 
                            </div>
                            <div class="product-quantity">
                                <span>
                                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                                </span>
                                <span class="update-quantity-link link-primary">
                                    Update
                                </span>
                                <span class="delete-quantity-link link-primary js-delete" data-cart-id="${product.id}">
                                    Delete
                                </span>
                            </div>
                        </div>
    
                        <div class="delivery-options">
                            <div class="delivery-options-title">
                                Choose a delivery option:
                            </div>
                            <div class="delivery-option">
                                <input type="radio" checked class="delivery-option-input" name="delivery-option-${cartItem.productId}">
                                <div>
                                    <div class="delivery-option-date">
                                        Tuesday, June 21
                                    </div>
                                    <div class="delivery-option-price">
                                        FREE Shipping
                                    </div>
                                </div>
                            </div>
                            <div class="delivery-option">
                                <input type="radio" class="delivery-option-input" name="delivery-option-${cartItem.productId}">
                                <div>
                                    <div class="delivery-option-date">
                                        Wednesday, June 15
                                    </div>
                                    <div class="delivery-option-price">
                                        $4.99 - Shipping
                                    </div>
                                </div>
                            </div>
                            <div class="delivery-option">
                                <input type="radio" class="delivery-option-input" name="delivery-option-${cartItem.productId}">
                                <div>
                                    <div class="delivery-option-date">
                                        Monday, June 13
                                    </div>
                                    <div class="delivery-option-price">
                                        $9.99 - Shipping
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            console.error(`Product with ID ${cartItem.productId} not found.`);
        }
    });
    setupDeleteButtons(renderCart);
}