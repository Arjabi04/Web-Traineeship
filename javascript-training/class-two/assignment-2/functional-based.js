// b)Functional based approach
// const user1 = { name: "Harry", age: 24, address: "Jhamsikhel", city: "Lalitpur" };
// const user2 = { name: "Ram", address: "Boudha", city: "Kathmandu" };

// Create a function/method to display user information
export const displayUserInformation = ({ name = "", age, address, city }) => {
    console.log(`Name: ${name}\n Age:${age} \n Address:${address} \nCity:${city} `);
}

// First show a countdown from 10 to 0 in the console (Should be dynamic, if no parameter is passed fallbacks to 1 second interval)

export const displayCountdown = () => {

}

// After the countdown ends, console user1's information 
// After 5 seconds, show user2's information
// You must use the ES6 features: Template Literals, Object Destructuring, Default Parameters, Rest and Spread Operator

