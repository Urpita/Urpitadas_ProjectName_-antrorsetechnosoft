// const home=document.querySelector('.home');
// const terms=document.querySelector('.Terms');
// const refund=document.querySelector('.refund');
// const about=document.querySelector('.About');

// terms.onclick=()=>{
//     terms.classList.remove('inactive');
//     refund.classList.add('inactive');
//     home.classList.add('inactive');
//     about.classList.add('inactive');

// }
// refund.onclick=()=>{
//     refund.classList.remove('inactive');
//     terms.classList.add('inactive');
//     home.classList.add('inactive');
//     about.classList.add('inactive');
// }
// about.onclick=()=>{
//     about.classList.remove('inactive');
//     refund.classList.add('inactive');
//     terms.classList.add('inactive');
//     home.classList.add('inactive');
   
// }
                



    // check out part
    const con=document.getElementById('conatainer');
     
    function showcart(){
      con.classList.remove('inactive');
    }

    const btn=document.getElementById('btn');
    const m_form=document.getElementById('main');
    const body=document.getElementById('body');
     function check(){
          m_form.classList.remove("inactive");
          // btn.classList.add("inactive");
          body.classList.add('inactive');
     }
  function processPayment() {
    
    document.getElementById('paymentProcessedModal').style.display = 'flex';

    // Display order details
    displayOrderDetails();
  }

  function displayOrderDetails() {
    const form = document.getElementById('checkoutForm');
    const orderDetails = document.getElementById('orderDetails');

    document.getElementById('orderName').textContent = form.name.value;
    document.getElementById('orderEmail').textContent = form.email.value;
    document.getElementById('orderAddress').textContent = form.address.value;
    document.getElementById('orderCardNumber').textContent = form.cardNumber.value;
    document.getElementById('orderExpiryDate').textContent = form.expiryDate.value;
    document.getElementById('orderCVV').textContent = form.cvv.value;


    form.style.display = 'none';
    orderDetails.style.display = 'block';
  }
  function closeModal() {

    document.getElementById('paymentProcessedModal').style.display = 'none';
  }

  //Add to cart


 const cart = [];

 function addToCart(productName, price) {
     const productDetails = {
         name: productName,
         price: price
     };

     // Add the product to the cart
     cart.push(productDetails);
     displayCart();
 }

 function displayCart() {
     const cartItemElement = document.getElementById('cart-item');
     cartItemElement.innerHTML = '';
     cart.forEach(item => {
         const listItem = document.createElement('div');
         listItem.textContent = `${item.name} - $${item.price.toFixed(2)} `;
         cartItemElement.appendChild(listItem);
     });

     const totalElement = document.getElementById('total');
     const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
     totalElement.textContent = `$ ${totalPrice.toFixed(2)}`;
     
    
 }

   //to delete element from array
   
 function removeItem(index) {

  cart.splice(index, 1);
  displayCart();
}

