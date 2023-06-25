// Function to update the cart count
function updateCartCount() {
  // Retrieve cart data from local storage
  const cartData = localStorage.getItem("cart");
  let cartCount = 0;

  if (cartData) {
    // Parse the cart data from JSON string to object
    const cart = JSON.parse(cartData);

    // Calculate the total count of items in the cart
    for (const key in cart) {
      cartCount += cart[key][0];
    }
  }

  // Update the cart count on the page
  document.getElementById("cart-item-count").innerHTML = cartCount;
}

// Function to handle the add to cart button click
function addToCart() {
  console.log("clicked");
  let idstr = this.id.toString();
  console.log(idstr);

  if (cart[idstr] !== undefined) {
    qty = cart[idstr][0] + 1;
    cart[idstr][0] = qty;
    console.log(qty);
  } else {
    qty = 1;
    productName = document.getElementById('name'+idstr).innerHTML;
    productPrice = document.getElementById('price'+idstr).innerHTML;
    console.log(productName);
    cart[idstr] = [qty,productName,productPrice];
  }

  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart count on the page
  updateCartCount();
  updatePopover(cart);
  console.log(cart);
}

// Attach the click event listener to the add to cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", addToCart);
});

// Update the cart count on page load
updateCartCount();
