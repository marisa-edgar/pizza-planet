# _Pizza Planet_

#### By _**Marisa Edgar**_

#### _a webpage to order pizza from pizza planet_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_

## Description

_a Webpage that allows you to order pizza from pizza planet._

## Setup/Installation Requirements

* _Create and/or navigate to the directory you would like to contain this project on your computer._
* _Initialize a git repository by typing git init in the terminal._
* _Type git clone https://github.com/marisa-edgar/pizza-planet to clone the repository to your local machine._
* _Use shortcut code . to open VS code editor._
* _Open the index.html in your browser._


## Known Bugs

* _No known bug_


## License

_Any questions or concerns please feel free to email at marisaedgar1212@gmail.com_

MIT

License under [MIT License]_(LICENSE)_
Copyright (c) _2022_ _Marisa Edgar_




Describe: Pizza()

Test: "It should return a Pizza object with properties for toppings and size"
Code: const myPizza = new Pizza();
Expected Output: Pizza {Pizza [top: undefined, size: undefined, price: 8]}

Describe: pizzaCost()

Test: "It should return price when size is selected"
Code: const myPizza = new Pizza("XL");
Expected Output: myPizza.pizzaCost{Pizza[size:"XL", top:undefined, price:"13";]}

Describe: pizzaCost()

Test: "It should return price when size is selected"
Code: const myPizza = new Pizza("large");
Expected Output: myPizza.pizzaCost{Pizza[size:"large", top:undefined, price:"11";]}


Describe: pizzaCost()

Test: "It should return price when size is selected"
Code: const myPizza = new Pizza("medium");
Expected Output: myPizza.pizzaCost{Pizza[size:"medium", top:undefined, price:"8";]}


Describe: pizzaCost()

Test: "It should return price when size and an array of toppings are added"
Code: const myPizza = new Pizza("medium"["spinach", "feta"]);
Expected Output: myPizza.pizzaCost{Pizza[size:"medium", top:["spinach", "feta"], price:"10";]}


