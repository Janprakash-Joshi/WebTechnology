var counter = 0;
function showhide(psw) {

   var psw = document.getElementById('psw');

   if (counter == 0) {
      psw.type = 'text';

      counter = 1;
   }
   else {
      psw.type = 'password';

      counter = 0;
   }


}
// Cart data
const cart = [];

// Function to render cart items

function renderCartItems() {
   const cartItemsElement = document.getElementById("pizza-items");
   cartItemsElement.innerHTML = "";

   cart.forEach(item => {
      const cartItemElement = document.createElement("div");
      cartItemElement.className = "pizza-item";

      const itemImageElement = document.createElement("img");
      itemImageElement.src = item.img;
      cartItemElement.appendChild(itemImageElement);

      const itemNameElement = document.createElement("span");
      itemNameElement.innerText = item.name;
      cartItemElement.appendChild(itemNameElement);

      const itemPriceElement = document.createElement("span");
      itemPriceElement.classList.add('price');
      itemPriceElement.innerText = item.price;
      cartItemElement.appendChild(itemPriceElement);


      cartItemsElement.appendChild(cartItemElement);
   });


}



// Add sample items to cart
items.forEach(item => {

   cart.push(item);
});

// Initial rendering
renderCartItems();



 
 function editCartItems() {
   const cartItemsElement = document.getElementById("edit-items");
   cartItemsElement.innerHTML = "";
 
   cart.forEach(item => {
     const cartItemElement = document.createElement("div");
     cartItemElement.className = "pizza-item";
     
     const itemImageElement = document.createElement("img");
     itemImageElement.src = item.img;
     cartItemElement.appendChild(itemImageElement);
 
     const itemNameElement = document.createElement("input");
     itemNameElement.value = item.name;
  
     itemNameElement.name="itemName"+item.id;
     cartItemElement.appendChild(itemNameElement);
 
     const itemPriceElement = document.createElement("input");
     itemPriceElement.classList.add('price');
     itemPriceElement.value = item.price;
     itemPriceElement.name="itemPrice"+item.id;
     itemPriceElement.classList.add('price');
     cartItemElement.appendChild(itemPriceElement);
 
     cartItemsElement.appendChild(cartItemElement);
 
    
   });
 }
 editCartItems();

