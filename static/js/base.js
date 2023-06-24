const items = document.querySelectorAll(".nav-link");
  
items.forEach(item => {
  item.addEventListener("click", function() {
    // Remove "active" class from all items
    items.forEach(item => {
      item.classList.remove("active");
    });
    
    // Add "active" class to the clicked item
    this.classList.add("active");
  });
});




if (localStorage.getItem("cart") == null) {
  var cart = {};
} else {
  cart = JSON.parse(localStorage.getItem("cart"));
  document.getElementById("cart-item-count").innerHTML = Object.keys(cart).length;
}

const button = document.getElementById("cart-button");
const popover = document.getElementById("popover");

button.addEventListener("click", () => {
  popover.style.display = popover.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!button.contains(event.target) && !popover.contains(event.target)) {
    popover.style.display = "none";
  }
});

updatePopover(cart);

function updatePopover(cart) {
  var popStr = "";
  popStr = popStr + "<h5>Products added to cart:</h5><div class = 'list-of-products-in-cart col my-2 text-left'>";
  let i = 1;
  for (var item in cart) {
    var productElement = document.getElementById('name'+item);
    if (productElement) {
      popStr += '<b>'+i+'</b>';
      popStr = "<div class='product-name-in-cart'>" + popStr + ".  " + productElement.innerHTML + "</div><div class'quantity-in-cart'>" + " <span class='word-quantity-in-cart'>Quantity:</span> " +"<span class='no-of-item-in-cart text-right'>"+ cart[item][0] +"</span>" + '</div><hr>';
      i += 1;
    } else {
      console.log("Product element not found for item: " + item);
    }
  }
  popStr = popStr + "</div> <a href = '/checkout'> <button class='btn btn-outline-success' id='checkOut'> Checkout</button></a> <button class='btn btn-outline-danger' id='clearCart'> Clear</button> "
  console.log(popStr);
  var popoverContentElement = document.querySelector(".popover-content");
  if (popoverContentElement) {
    popoverContentElement.innerHTML = popStr;
  } else {
    console.log("Popover content element not found.");
  }
}


function clearCart() {
  cart = JSON.parse(localStorage.getItem('cart'));
  var result = confirm("Are you sure you want to clear the cart?");
  if(result){
    console.log("Cart cleared");
  localStorage.clear();
  cart = {};
  updateCartCount(cart);
  }
  else{
    console.log("Clear canceled");
  }
}

let clearButton = document.getElementById('clearCart');
clearButton.addEventListener('click', clearCart);

// jQuery

// $(".add-to-cart-btn").click(function () {
//   console.log("clicked");
//   let idstr = this.id.toString();
//   console.log(idstr);
//   if (cart[idstr] != undefined) {
//     cart[idstr] = cart[idstr] + 1;
//   } else {
//     cart[idstr] = 1;
//   }
//   console.log(cart);
//   // updateCart(cart);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   document.getElementById("cart-item-count").innerHTML =
//     Object.keys(cart).length;
// });

// function updateCart(cart) {
//   for (let item in cart) {
//     document.getElementById("div" + item).innerHTML = "<button id='minus" + item + "' class='btn btn-outline-light minus'>-</button> <span class='text-white' id='val" + item + "''>" + cart[item] + "</span> <button id='plus" + item +"' class='btn btn-outline-light plus'> + </button>";
//   }
// }


// // IF + or - button is clicked, change cart as well as display value
// $('.divpr').on("click", "button.minus", function() {
//   a = this.id.slice(8, );
//   cart['pr-' + a] -= 1;
//   cart['pr-' + a] = Math.max(0, cart['pr-' + a]);
//   document.getElementById('valpr-' + a).innerHTML = cart['pr-' + a];
//   updateCart(cart);
// });
// $('.divpr').on("click", "button.plus", function() {
//   a = this.id.slice(7, );
//   cart['pr-' + a] = cart['pr-' + a] + 1;
//   document.getElementById('valpr-' + a).innerHTML = cart['pr-' + a];
//   updateCart(cart);
// });