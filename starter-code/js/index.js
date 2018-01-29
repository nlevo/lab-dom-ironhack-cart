
// function deleteItem(e){

// }

function getPriceByProduct(){
    var price = document.getElementsByClassName("productPrice");
    for(var i = 0; i < price.length; i++){
      var priceString = price[i].outerText;
      var priceFloat = priceString.slice(1, priceString.length);
      return priceFloat;
    }
  }

//var calcButton = document.getElementsByClassName('btn-success')[0];

var createButton = document.getElementById('create-btn');

var itemsList = document.getElementById('items-holder');
console.log(itemsList);

//create button event
createButton.addEventListener('mousedown', createItem)

//create new item
function createItem(e){
  //e.preventDefault();
  var template = document.getElementById('template');
  var newItem = template.cloneNode(true);

  var newItem2 = document.getElementById('product-input').value;
  var something = document. getElementById('product price');
  console.log(something);
  //creating product name
  var div = document.createElement('div');
  div.className = 'wrapper';
  div.appendChild(document.createTextNode(newItem));
  itemsList.appendChild(div);
  //creating cost
  div.className = 'wrapper';
  div.appendChild(document.createTextNode(newItem));
  itemsList.appendChild(newItem);
}

function updateTotalPrice(){

}






// calcButton.onclick = function(){
//     var input = document.getElementsByTagName('input')[0];
//     var total = Number((getPriceByProduct() * input.value)); 
//     var totalPrice = document.querySelectorAll(".total-price-span");
//     totalPrice[0].innerText = total.toFixed(2);
// }

// var createButton = document.getElementsByClassName('btn-create')[0];

// createButton.onclick = function(){;
//   var newItem = document.getElementsByClassName("wrapper");
//   var createWrapper = document.getElementsByClassName("wrapper-create");
//   var productName = document.querySelectorAll('.product-name');
//   console.log(createWrapper);
// }

// function createItem(){
   
// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
