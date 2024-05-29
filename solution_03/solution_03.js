/*


Part 3: Colorful T-Shirts
Challenge:
1. Design a type alias named Product to represent a T-shirt object with properties like nam (string), price (number), and one (string).
2. Include a nested object named inventory within Product. This inventory object should have two properties: stock (number): Represents the number of T-shirts available. celerOptions (optional array of strings): Lists available colors (if any)
3. Inside the inventory object, define a function named changeColor. This function accepts a new color string as an argument. When called, it should: Update the colur property of the Froduct object. Adjust the price based on the new color (implement your own logic, eg. increase by 10% for red, decrease by 5% for blue).

*/
var Tshirt = {
    name: "Nike",
    price: 2000,
    color: "red",
    inventory: {
        stock: 10,
        changeColor: function (newColor) {
            Tshirt.color = newColor;
            if (Tshirt.color === "black") {
                var ipercent20 = Tshirt.price / 100 * 20;
                Tshirt.price += ipercent20;
            }
            else if (Tshirt.color === "white") {
                var dpercent10 = Tshirt.price / 100 * 10;
                Tshirt.price -= dpercent10;
            }
            else if (Tshirt.color === "red") {
                var ipercent5 = Tshirt.price / 100 * 5;
                Tshirt.price += ipercent5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(Tshirt);
Tshirt.inventory.changeColor("black");
console.log(Tshirt);
//       this.color=newColor
//       if (this.colorOptions.colorOptions && this.inventory.colorOptions.includes(newColor)) {
//         if (newColor === "red") {
//           this.color = newColor;
//           this.price *= 1.1; // Increase price by 10% for red
//         } else if (newColor === "blue") {
//           this.color = newColor;
//           this.price *= 0.95; // Decrease price by 5% for blue
//         } else {
//           this.color = newColor;
//         }
//         console.log(`Color changed to ${newColor}. New price: ${this.price}`);
//       } else {
//         console.log(`Color ${newColor} is not available.`);
//       }
//     }
//   }
// };  
