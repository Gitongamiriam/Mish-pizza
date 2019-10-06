$(document).ready(function() {
    $("#hide1,#show1").click(function() {
        $("#show1").toggle();
        $("#hide1").toggle();
    });
    $("#hide2,#show2").click(function() {
        $("#show2").toggle();
        $("#hide2").toggle();
    });
    $("#hide3,#show3").click(function() {
        $("#show3").toggle();
        $("#hide3").toggle();
    });
});
function Details(type, size, crust, toppings, quantity){
  this.selectedType = type;
  this.selectedSize = size;
  this.selectedCrust = crust;
  this.selectedToppings = toppings;
  this.selectedQuantity = quantity;
}

function Total(price, quantity, delivery){
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery;
}

Total.prototype.finalTotal = function(){
  return this.price * this.quantity + this.delivery;
}

$(document).ready(function(){
  $('#form2').submit(function(event){
    event.preventDefault();

    var selectedDeliver = parseInt($('#delivery-option').val());
    var deliverPrices = [200, 0]
    var sizePrices = [500, 750, 1500];
    var inputtedType = $('#type').val();
    var inputtedCrust = $('#crust').val();
    var inputtedTopping = $('#toppings').val();
    var inputtedSize = parseInt($('#size').val());
    var pizzaPrice = sizePrices[inputtedSize-1];
    var inputtedQuantity = parseInt($('#quantity').val());
    var deliveryPrice = deliverPrices[selectedDeliver-1];

    var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity);
    var newTotal = new Total(pizzaPrice, inputtedQuantity, deliveryPrice);
    var newBill = newTotal.finalTotal();


    alert("your order is " + newDetails.selectedType + ", " + newDetails.selectedToppings + ', and ' + newDetails.selectedCrust +". click ok to view your bill");
    alert(newBill +"");

    document.getElementById('form2').reset();

  });
});