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

      itemNameElement.name = "itemName" + item.id;
      cartItemElement.appendChild(itemNameElement);

      const itemPriceElement = document.createElement("input");
      itemPriceElement.classList.add('price');
      itemPriceElement.value = item.price;
      itemPriceElement.name = "itemPrice" + item.id;
      itemPriceElement.classList.add('price');
      cartItemElement.appendChild(itemPriceElement);

      cartItemsElement.appendChild(cartItemElement);


   });
}
editCartItems();

document.getElementById("update").addEventListener("submit", function() {
   // Enable the disabled checkboxes before submitting the form
   var checkboxes = document.querySelectorAll("input[type=checkbox][disabled]");
   checkboxes.forEach(function(checkbox) {
       checkbox.disabled = false;
   });
});

const checkboxes = document.querySelectorAll('.checkbox');


 checkboxes.forEach(checkbox => {
   checkbox.disabled=true;
   checkbox.addEventListener('change', function() {
       if (this.checked) {
           // Uncheck all other checkboxes
           checkboxes.forEach(otherCheckbox => {
               if (otherCheckbox !== this) {
                   otherCheckbox.checked = false;
               }
           });
       }
   });
});


checkboxes.forEach((checkbox, index) => {
  
   if(index%3==0 || checkbox.checked){
      checkboxes[index].disabled=false;
   }

});

orderItems.forEach(order=>{
   complete_orders.forEach(order1=>{
  if(order1['product_id']==order['id']){
   let exe=document.getElementById('execute'+order1['product_id']);
   let out=document.getElementById('out'+order1['product_id']);
   let del=document.getElementById('delivered'+order1['product_id']);
   
   exe.disabled=true;
   exe.style.display='none';
   if(order1['out_for_delivery']==0 && order1['delivery']==0){
   out.disabled=false;
   
  }
  else{
   
   del.disabled=false;
   out.style.display='none';
  }
  if(order1['delivery']==1){
  del.disabled=true;
  del.style.display='none';
  }
  }
   });  

});

  
//sort

let old=document.getElementById('orderManage');
complete_orders.forEach(order1=>{
   let id=order1['product_id'];
 if(order1['delivery']==1){
   let olditem=document.getElementById('data'+id);
   olditem.remove();
   var secondRow = old.children[0];

       // Insert the element after the second row
       old.insertBefore(olditem, secondRow.nextSibling);
 }
});

  



