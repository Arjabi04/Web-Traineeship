import { welcomeWindow } from "./welcome-message.js";
import { addItem } from "./add-items.js";

export function updateCount() {
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

