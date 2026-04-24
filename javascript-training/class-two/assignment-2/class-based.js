import { displayCountdown, sleep } from "./app.js";

// const user2 = { name: "Ram", address: "Boudha", city: "Kathmandu" };
// const user1 = { name: "Harry", age: 24, address: "Jhamsikhel", city: "Lalitpur", extra_test: "testing rest", extra_test_2: "testing rest" };


export class DisplayUserInformation {
    constructor({ name, age, address, city, ...rest }) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.city = city;
        this.rest = rest;

    }
    display() {
        console.log(`Name:${this.name}\nAge:${this.age}\nAddress:${this.address}\nCity:${this.city}`);
        for (const key in this.rest) {
            console.log(`${key}: ${this.rest[key]}`)
        }
    }
}

export async function classApproachDisplayAll(user1, user2) {
    try {
        await displayCountdown(500); //countdow with .5 seconds interval
        const person1 = new DisplayUserInformation({ ...user1 });
        person1.display();

        await sleep(5000);  //display users 2 info after 5 seconds
        const person2 = new DisplayUserInformation({ ...user2 });
        person2.display();

    } catch (error) {
        console.error(error);
    }
}

