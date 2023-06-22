console.log("Hello")

if(localStorage.getItem('cart')==null){
    var cart ={};
}
else{
    cart = JSON.parse(localStorage.getItem('cart'))
    document.getElementById('cart-item-count').innerHTML = Object.keys(cart).length;
}

// jQuery
$('.add-to-cart-btn').click(function(){
    console.log('clicked');
    let idstr = this.id.toString();
    console.log(idstr);
    if(cart[idstr] != undefined){
        cart[idstr] = cart[idstr] +1;
    }
    else{
        cart[idstr]=1;
    }
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(cart));
    document.getElementById('cart-item-count').innerHTML = Object.keys(cart).length;
})