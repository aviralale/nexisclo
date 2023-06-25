if (localStorage.getItem('cart') == null) {
    var cart = {};
} else {
    cart = JSON.parse(localStorage.getItem('cart'));
}
console.log(cart);


if ($.isEmptyObject(cart)){
    // IF OBJECT IS EMPTY
    myStr = `<p>Your cart is empty. Add some items in the cart before checking out.</p><a href="/"><button class="btn btn-outline-light">Home</button></a>`;
    $('#items').append(myStr);
}let total = 0;
for(item in cart){
    let name = cart[item][1];
    let price = cart[item][2];
    let qty = cart[item][0];
    let itemTotal = price * qty;
    let digits = 2;
    let itemTotalPrice = Number(itemTotal.toFixed(digits));
    console.log(itemTotalPrice);
    total += itemTotalPrice;
    totalPrice = Number(total.toFixed(digits));
    console.log(totalPrice);
    myStr = `<li class="list-group-item d-flex justify-content-between align-items-start py-3">
    <div class="ms-2 me-auto">
      
    <div class="d-flex flex-column"><div class="fw-bold">${name}</div>
    </div>
    <p class="mb-0 opacity-75" >NRs. ${itemTotalPrice}</p>
    </div>
    <span class="badge bg-success p-2 rounded-pill my-auto">${qty}</span>
  </li>`
  $('#items').append(myStr);
};

// Display the total price
let totalStr = `<li class=" list-group-item d-flex justify-content-between align-items-start py-3 ">
  <div class="ms-2 me-auto">
    <div class="fw-bold">Total:</div>
  </div>
  <p class="mb-0 opacity-100">NRs. ${totalPrice}</p>
</li>`;

$('#items').append(totalStr);