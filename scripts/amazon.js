// import products from "../data/products.js"
// const products = [
//     {
//         Image : "images/products/athletic-cotton-socks-6-pairs.jpg",
//         name : "Black and Gray Athletic Cotton Socks - 6 Pairs",
//         rating : {
//             stars : 4.5,
//             count : 87
//         },
//         priceCents : 1090
//     },
//     {
//         Image : "images/products/intermediate-composite-basketball.jpg",
//         name : "Intermediate Size Basketball",
//         rating : {
//             stars : 4,
//             count : 127
//         },
//         priceCents : 2095
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
//     {
//         Image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//         name : "Adults Plain Cotton T-Shirt - 2 Pack",
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },
// ]

const showProduct = document.querySelector(".js-container");
products.forEach((product, index) => {
  const productHTML = `
        <div class="product-container ">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${
    product.name
  }">
          </div>
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${Math.round(
              product.rating.stars * 10
            )}.png" alt="${product.rating.stars} stars">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>
          <div class="product-quantity-container">
            <select>
              ${Array.from(
                { length: 10 },
                (_, i) => `<option value="${i + 1}">${i + 1}</option>`
              ).join("")}
            </select>
          </div>
          <div class="product-spacer"></div>
          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" alt="Added">
            Added
          </div>
          <button class="add-to-cart-button button-primary js-cart " data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>`;

  showProduct.insertAdjacentHTML("beforeend", productHTML);
});

document.querySelectorAll(".js-cart").forEach((button) => {
  button.addEventListener("click", () => {
    //console.log(button.dataset.productName)
    const productId = button.dataset.productId;
    const item = cart.find((item) => item.productId === productId);

    if (item) {
      item.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    let sum = 0;
    cart.forEach((element) => {
      console.log(element);
      sum += element.quantity;
    });
    console.log(sum);
    const showquantity = document.querySelector(".js-qunatity");
    showquantity.innerHTML = sum;
    // console.log('click')
    // alert("adding")
  });
});
