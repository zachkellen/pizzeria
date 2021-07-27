function pizzaOven(crustType, sauceType, cheese, topings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.topings = topings;
    return pizza;
}

var pizza1 = pizzaOven('deep dish', 'traditional', ['Mozzarella'], ['pepperoni', 'sausage']);
console.log(pizza1);

var pizza2 = pizzaOver('hand tossed', 'marinara', ['mozarella', 'feta'], ['mushrooms', 'olives', 'onions']);
console.log(pizza2);

var pizza3 = pizzaOver('thin', 'white', ['mozarella', 'feta'], ['chicken', 'spinach', 'onions']);
console.log(pizza3);

var pizza4 = pizzaOver('normal', 'marinara', 'mozarella', 'pepperonni');
console.log(pizza4);