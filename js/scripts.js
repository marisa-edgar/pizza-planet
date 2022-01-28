function Pizza(size,top) {
  this.size = size;
  this.top = top;
  this.price = 8;
};
Pizza.prototype.pizzaCost = function() {
  let pizzaTop = this.top.length *1;
  if (this.size === "xl") {
    return this.price += 5 + pizzaTop;
  } else if (this.size === "large") {
    return this.price += 3 + pizzaTop;
  } else {
    return this.price += pizzaTop;
  };
};

function topSize(pizza) {
  $("#pizza1").show();
  $(".pizza-size").html(pizza.size);
  $(".topping").html(pizza.top);
  $(".cost").html(pizza.price);
};
$(document).ready(function(){
  $("form.pizza").submit(function(event) {
    event.preventDefault();
    $("#pizza1").show();
    let pizzaSize =$("input:radio[name=size]:checked").val();
    let pizzaToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      const pizzaBuilder = $(this).val();
      pizzaToppings.push("<br>" + pizzaBuilder + "<br>");
    });
    let pizza = new Pizza(pizzaSize,pizzaToppings);
    pizza.pizzaCost();
    topSize(pizza);
    $(".pizza").hide();
  });
});

