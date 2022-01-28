function Pizza(top1, top2, top3, top4, top5, size, price) {
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.top4 = top4;
  this.top5 = top5;
  this.size = size;
  this.price = 8;
}
Pizza.prototype.sizeCost = function() {
  if (this.size = "XL") {
    return this.price += 5;
  } else if (this.size = "large") {
    return this.price += 3;
  } else {
    return this.price;
  }
}