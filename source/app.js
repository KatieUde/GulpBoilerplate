
// define an ES6 class called HelloWorld
class HelloWorld {
  constructor(name, purpose) {
    this.attrs = {
      name: name,
      purpose: purpose
    }
  }
  // define a toString() method on the class
  toString() {
    return 'Hello, world!'
  }
}

// instantiate a new instance of HelloWorld
var sample = new HelloWorld("Katie", "being fabulous");
// console.log sample's toString() method
console.log(sample.toString());
console.log(sample.attrs);
