var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

var [first, second, ...rest] = ["Mercury", ...planets];

console.log(first); //Output: Mercury
console.log(second); //Output: Mercury
console.log(rest); //Output: ["Earth", "Venus", "Mars", "Pluto", "Saturn"]

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

var [first, second, third, fourth, ...rest] = ["Mercury", "Earth", ...planets];

console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(third); //Output: Mercury
console.log(fourth); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]