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
  
  function Total(price, quantity,){
    this.price = price;
    this.quantity = quantity;
  }
  
  Total.prototype.finalTotal = function(){
    return this.price * this.quantity ;
  }
  
  
  $(document).ready(function(){
    $('#form2').submit(function(event){
      event.preventDefault();
  
      var sizePrices = [ small="500",medium="750",large="1500"];
      var inputtedType = $('#type').val();
      var inputtedCrust = $('#crust').val();
      var inputtedToppings= $('#toppings').val();
      var inputtedSize = parseInt($('#size').val());
      var pizzaPrice = sizePrices[inputtedSize-1];
      var inputtedQuantity = parseInt($('#quantity').val());
  
      var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedToppings, inputtedQuantity);
      var newTotal = new Total(pizzaPrice, inputtedQuantity);
      var newBill = newTotal.finalTotal();
  
  
      alert("your order is " + newDetails.selectedType + ", " + newDetails.selectedToppings + ', and ' + newDetails.selectedCrust +". click ok to view your bill");
      alert(newBill +"");
  
      document.getElementById('form2').reset();
  
    });
  });