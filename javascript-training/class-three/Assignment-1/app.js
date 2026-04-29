import { welcomeWindow } from "./welcome-message.js";
import { addItem } from "./add-items.js";
import { clearAll, removeItems } from "./remove-items.js";
import { stylingWithJS } from "./styling-with-js.js";

const totalItemsText = document.querySelector('.container p');
const toast = document.getElementById('toast');


export function updateCount(itemCount) {
    totalItemsText.innerText = `TOTAL ITEMS: ${itemCount}`;
}

export function showToast(text) {
    toast.innerText = text;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}


welcomeWindow();

//add item
const addBtn = document.querySelector('.add-item-btn');
addBtn.addEventListener('click', addItem);

// remove one item from list
removeItems();

// clear all items from list 
clearAll();

// styling with list
stylingWithJS();

