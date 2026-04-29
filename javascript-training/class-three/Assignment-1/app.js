import { welcomeWindow } from "./welcome-message.js";
import { addItem } from "./add-items.js";
import { clearAll, removeItems } from "./remove-items.js";
import { stylingWithJS } from "./styling-with-js.js";
import { debounce, filterItems } from "./search-filter.js";


const totalItemsText = document.querySelector('.container p');
const toast = document.getElementById('toast');
const searchInput = document.getElementById('searchItems');


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

// filter with debounce function with a 500ms delay
searchInput.addEventListener('input', debounce(filterItems, 500));