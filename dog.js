"use strict";

class Animal {
  eat() {
    console.log("om nom nom");
  }
}

class Dog extends Animal {
  //By extending the Animal class, it inherits all methods from
  //the animal Class
}

const d = new Dog();
d.eat();