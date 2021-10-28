/*

Part One
Create a class for vehicle. Each vehicle instance should have the following properties:

make
model
year
Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

*/

// Part One

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep.';
    }
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
console.log(myFirstVehicle.honk()); // Beep.


/*

Part Two
Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4

*/


// Part Two

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}

let myFirstCar = new Car('Toyota', 'Corolla', 2005);
console.log(myFirstCar.toString()); // The vehicle is a Toyota Corolla from 2005.
console.log(myFirstCar.honk());     // Beep.
console.log(myFirstCar.numWheels);  // 4


/*

Part Three
Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
"The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2

*/

// Part Three

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'WROOM!!!';
    }
    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}

let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

console.log(myFirstMotorcycle.toString()); // The vehicle is a Honda Nighthawk from 2000.
console.log(myFirstMotorcycle.honk());     // Beep.
console.log(myFirstMotorcycle.revEngine()); // VROOM!!!
console.log(myFirstMotorcycle.numWheels);  // 2

/*

Part Four
Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
"Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
"Sorry, we're full.

*/

// Part Four

class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }

let garage = new Garage(2);
console.log(garage.vehicles); // []

console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // Vehicle added!
console.log(garage.vehicles); // [Car]

console.log(garage.add("Taco")); // Only vehicles are allowed in here!

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));   // Vehicle added!
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))); // Sorry, we are full.