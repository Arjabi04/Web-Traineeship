// Add Items
// Read the value from the add <input>
// Trim whitespace and prevent empty submissions
// Create a new <li> with the item text and a Remove button
// Clear the input field after adding
// Update the item count
// Show "Item added!" toast for 2 seconds

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

const itemInput = document.querySelector('.new-item-input input');
const totalItemsText = document.querySelector('.container p');
const toast = document.getElementById('toast');
const allItemsWrapper = document.querySelector('.all-items');

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
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item-container';

    itemDiv.innerHTML = `
        <ul class="list">
            <li>- - - ${text} - - -</li>
        </ul>
        <button class="remove-btn">REMOVE</button>
    `;

    allItemsWrapper.appendChild(itemDiv);

    // Clear the input field after adding
    itemInput.value = "";
    // Update the item count

    itemCount++;
    updateCount();

    // Show "Item added!" toast for 2 seconds
    showToast("Item Added!");
}

