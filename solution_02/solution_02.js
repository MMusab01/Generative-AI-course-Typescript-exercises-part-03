/*

Part 2: Car Details
Challenge:
1. Design a type alias named Car to represent a car object.
2. Include a nested object named engine within Car, containing a property named horsepower (mumber)
3. Define a function named peshorsepower directly within the car type alias to retrieve the engine's horsepower.

*/
var myCar = {
    engine: {
        horsepower: 300,
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    },
};
console.log(myCar.getHorsepower());
