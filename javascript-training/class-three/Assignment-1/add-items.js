// Add Items
// Read the value from the add <input>
// Trim whitespace and prevent empty submissions
// Create a new <li> with the item text and a Remove button
// Clear the input field after adding
// Update the item count
// Show "Item added!" toast for 2 seconds
import { showToast, updateCount } from "./app.js";

// const allItemsWrapper = document.querySelector('.all-items');
const itemList = document.getElementById('item-list');
const itemInput = document.querySelector('.new-item-input input');
const clearBtn = document.querySelector('.clear-all-items-btn');

let itemCount = 0;
export function addItem() {
    //  Read and trim whitespace
    const text = itemInput.value.trim();

    // Prevent empty submissions
    if (text === "") {
        showToast("Enter an item");
        return;
    }

    // Create a new <li> with the item text and a Remove button
    const item = document.createElement('li');
    item.className = 'item-container';
    item.innerHTML = `
        <span>${text}</span>
        <button class="remove-btn">REMOVE</button>
    `;

    itemList.appendChild(item);

    // Clear the input field after adding
    itemInput.value = "";

    // Update the item count
    itemCount++;

    updateCount(itemCount);

    if (itemCount > 0) {
        clearBtn.style.display = 'flex';
    }

    // Show "Item added!" toast for 2 seconds
    showToast("Item Added!");
}

