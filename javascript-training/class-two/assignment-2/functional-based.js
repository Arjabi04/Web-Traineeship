import { displayCountdown, sleep } from "./app.js";


// b)Functional based approach

// Create a function/method to display user information
export const displayUserInformation = ({ name = "Unknown", age = "Unknown", address = "Unknown", city = "Unknown", ...rest }) => {
    console.log(`Name: ${name}\nAge:${age} \nAddress:${address} \nCity:${city} `);
    for (const key in rest) {
        console.log(`${key}: ${rest[key]}`);
    }
}

// Functional approach
// After the countdown ends, console user1's information 
// After 5 seconds, show user2's information
export async function functionalApproachDisplayAll(user1, user2) {
    try {
        await displayCountdown(500); //countdow with .5 seconds interval
        displayUserInformation({ ...user1 });
        await sleep(5000);  //display users 2 info after 5 seconds
        displayUserInformation({ ...user2 });  //display users 2 info after 5 seconds
    } catch (error) {
        console.error(error);
    }
}

