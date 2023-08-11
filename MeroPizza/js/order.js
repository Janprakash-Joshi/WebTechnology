console.log(items);
container=document.getElementById('data');
var totalAmount=0;
items.forEach(item => {
    totalAmount+=(item['price']*item['quantity']);
   
    dataElement=document.createElement('tr');
   

    date=document.createElement('div');
    date.textContent=item['date'];
    date.className="cnt";

    dataItem=document.createElement('td');
    dataItem.textContent=item['product'];


    dataQuantity=document.createElement('td');
    dataQuantity.textContent=item['quantity'];

    dataPrice=document.createElement('td');
    dataPrice.textContent=item['price'];

    dataAmount=document.createElement('td');
    dataAmount.textContent=item['price']*item['quantity'];
  
    dataPayment=document.createElement('td');
    dataPayment.textContent=item['payment'];
    
    container.appendChild(dataElement);
    container.appendChild(date);
    dataElement.appendChild(dataItem);
    dataElement.appendChild(dataQuantity);
    dataElement.appendChild(dataPrice);
    dataElement.appendChild(dataAmount);
    dataElement.appendChild(dataPayment);
   
    
});

