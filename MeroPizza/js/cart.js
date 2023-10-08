
  // Cart data
  const cart = [];

  // Function to render cart items
  function renderCartItems() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    cart.forEach(item => {
      const cartItemElement = document.createElement("div");
      cartItemElement.className = "cart-item";

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

      const quantityElement = document.createElement("div");
      quantityElement.className = "quantity";
      

      const decreaseButton = document.createElement("button");
      decreaseButton.innerText = "-";
      decreaseButton.addEventListener("click", () => decreaseQuantity(item));
      quantityElement.appendChild(decreaseButton);

      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.name="quantity"+item.id;
      quantityInput.min=0;
      quantityInput.value = item.quantity;
      quantityInput.addEventListener("input", (event) => updateQuantity(item, event.target.value));
      quantityElement.appendChild(quantityInput);

      const increaseButton = document.createElement("button");
      increaseButton.innerText = "+";
      increaseButton.addEventListener("click", () => increaseQuantity(item));
      quantityElement.appendChild(increaseButton);

      cartItemElement.appendChild(quantityElement);

      cartItemsElement.appendChild(cartItemElement);
    });
  }


  
const cartItemsElement = document.getElementById("cart-items");
const searchInput = document.getElementById("search-input");

// Function to filter and display cart items based on the search keyword
function filterItems() {
  const searchTerm = searchInput.value.toLowerCase();
  const cartItemElements = cartItemsElement.getElementsByClassName("cart-item");

  for (let cartItem of cartItemElements) {
    const itemNameElement = cartItem.querySelector("span");
    const text = itemNameElement.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      cartItem.style.display = "flex";
    } else {
      cartItem.style.display = "none";
    }
  }
}

// Add an event listener to the search input to trigger the filtering
searchInput.addEventListener("input", filterItems);




  // Function to increase item quantity
  function increaseQuantity(item) {
    item.quantity++;
    renderCartItems();
    filterItems()
    totalAmount();
  }

  // Function to decrease item quantity
  function decreaseQuantity(item) {
    if (item.quantity > 0) {
      item.quantity--;
      renderCartItems();
      filterItems()
    }
    totalAmount();
  }

  // Function to update item quantity
  function updateQuantity(item, quantity) {
    item.quantity = parseInt(quantity);
    renderCartItems();
    filterItems()
  }

 

  // Add sample items to cart
  items.forEach(item => {
    item.quantity = 0; 
    cart.push(item);
  });

  // Initial rendering
  renderCartItems();
 
  //total amount
  const elementTotalAmount=document.getElementById('totalAmount');
  function totalAmount(){
    var totalAmount=0;
    items.forEach(item => {
        totalAmount=(item.quantity*item.price)+totalAmount;
    });

    elementTotalAmount.innerText=totalAmount;
  }



