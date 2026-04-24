// import { UserHandler } from "./class-based.js";
import { displayUserInformation, functionalApproachDisplayAll } from "./functional-based.js";
import { classApproachDisplayAll } from "./class-based.js";

// const user1 = { name: "Harry", age: 24, address: "Jhamsikhel", city: "Lalitpur", extra_test: "testing rest", extra_test_2: "testing rest" };
const user1 = { name: "Harry", address: "Jhamsikhel", city: "Lalitpur" };
const user2 = { name: "Ram", address: "Boudha", city: "Kathmandu" };

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// First show a countdown from 10 to 0 in the console (Should be dynamic, if no parameter is passed fallbacks to 1 second interval)
export async function displayCountdown(ms = 1000) {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
        await sleep(ms);
    }
}

async function assignment2() {
    try {
        console.log("a)Class based approach");
        await classApproachDisplayAll({ ...user1 }, { ...user2 });
        console.log("");//for spacing
        console.log("b) Functional based approach")
        await functionalApproachDisplayAll({ ...user1 }, { ...user2 });
    } catch (error) {
        console.log(error);
    }
}

assignment2();




