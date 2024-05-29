/*

Part 1: Employee Data
Challenge:
1. Design a type alias named timpinywe to represent an employee object with properties like nane (string), department (string), and so (string).
2. Include an optional nested object named contacts to hold phone and email information (if provided)
3. Employ a union type for the is property to restrict it to "Manager", "Engineer", or "Intern"
4. Make the skills property an optional array of strings for listing an employee's skills (if any)

*/
var employees = {
    name: "Musab",
    department: "Record management",
    role: "Manager",
    skills: ["inventory", "indexing", "scanning", "client services"]
};
var employees1 = {
    name: "Abdullah",
    department: "Hr",
    role: "Manager",
    skills: ["manage employee data", "data entry", "making salary", "client services"],
    contact: {
        Phone: +923000112233,
        email: "name123@gmail.com",
    }
};
