// class Pizza
class Pizza {
  constructor(customerName, pizzaSize, delivery = Boolean, price = 0) {
    this.customerName = customerName;
    this.pizzaSize = pizzaSize;
    this.delivery = delivery;
    this.price = price;
  }
  getTotalPrice(crust, toppings, quantity) {
    if (this.pizzaSize == "small") {
      if(this.delivery == true){
        return (this.price += crust + toppings + 300 + 200) * quantity
      } else {
        return (this.price += crust + toppings + 300) * quantity
      }
    }
    else if (this.pizzaSize == "medium"){
      if(this.delivery == true){ 
        return (this.price += crust + toppings + 500 + 200) * quantity
      }else {
        return (this.price += crust + toppings + 500) * quantity
      }
    }else {
      if(this.delivery == true){
        return (this.price += crust + toppings + 800 + 200) * quantity
      }else {
        return (this.price += crust + toppings + 800) * quantity
      }
    }
  }
}

let pizza = new Pizza("Crispus Njenga", "medium", false);
console.log(`Customer Name: ${pizza.customerName}
Pizza Size: ${pizza.pizzaSize}
Total Price: ${pizza.getTotalPrice(200, 100, 2)}`);
