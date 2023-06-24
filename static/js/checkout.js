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
}
for(item in cart){
    let name = cart[item][1];
    
    let qty = cart[item][0];

    myStr = `<li class="list-group-item d-flex justify-content-between align-items-start py-3">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${name}</div>
    </div>
    <span class="badge bg-success p-2 rounded-pill">${qty}</span>
  </li>`
  $('#items').append(myStr);
};