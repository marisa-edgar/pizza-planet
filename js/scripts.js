function Pizza(size,top) {
  this.size = size;
  this.top = top;
  this.price = 8;
}
Pizza.prototype.sizeCost = function() {
  let pizzaTop = this.top.length *1;
  if (this.size === "XL") {
    return this.price += 5;
  } else if (this.size === "large") {
    return this.price += 3;
  } else {
    return this.price;
  }
}