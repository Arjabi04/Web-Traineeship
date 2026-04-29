// Remove Items (Use Event Delegation)
// Attach one click event listener on <ul> (not on each individual button)
// Remove the matching <li> from the DOM
// Update the item count
// Show "Item removed!" toast for 2 seconds

import { showToast, updateCount } from "./app.js";

const itemList = document.getElementById('item-list');
const clearBtn = document.querySelector('.clear-all-items-btn');

export function removeItems() {
    // Attach one listener to the parent <ul>
    itemList.addEventListener('click', (e) => {
        //  see if the click was on the remove button
        if (e.target.matches('.remove-btn')) {

            // remove the matching li
            e.target.closest('li').remove();

            // update count and UI state
            const total = itemList.querySelectorAll('li').length;
            updateCount(total);

            // hide clear button if the list is empty
            if (total === 0) {
                clearBtn.style.display = 'none';
            } else {
                clearBtn.style.display = 'block';
            }

            // show toast
            showToast("Item removed!");
        }
    })
};


// Clear All Items
// Remove all <li> elements from the list
// Reset item count display to 0
// Show "All items cleared!" toast for 2 seconds
// Disable / Remove the Clear All button when the list is empty

export function clearAll() {
    clearBtn.addEventListener('click', function () {
        // Remove all <li> elements from the list
        itemList.innerHTML = '';

        // Reset item count display to 0
        updateCount(0);

        // Disable / Remove the Clear All button when the list is empty
        clearBtn.style.display = 'none';

        // Show "All items cleared!" toast for 2 seconds
        showToast("All items cleared!");
    });
}