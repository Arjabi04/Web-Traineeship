// import { UserHandler } from "./class-based.js";
import { displayUserInformation } from "./functional-based.js";

const user1 = { name: "Harry", age: 24, address: "Jhamsikhel", city: "Lalitpur" };
const user2 = { name: "Ram", address: "Boudha", city: "Kathmandu" };

// Functional approach
displayUserInformation(user1)
displayUserInformation(user2)