import { welcomeWindow } from "./welcome-message.js";
import { addItem } from "./add-items.js";

welcomeWindow();

//add item
const addBtn = document.querySelector('.add-item-btn');

addBtn.addEventListener('click', addItem);

