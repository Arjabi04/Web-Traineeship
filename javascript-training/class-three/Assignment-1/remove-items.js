// Remove Items (Use Event Delegation)
// Attach one click event listener on <ul> (not on each individual button)
// Remove the matching <li> from the DOM
// Update the item count
// Show "Item removed!" toast for 2 seconds

import { showToast, updateCount } from "./app.js";

export function initRemoval() {
    const allItemsWrapper = document.querySelector('.all-items');

    // Event Delegation. attaches event listener to ul 
    allItemsWrapper.addEventListener('click', (event) => {

        if (event.target.matches('.remove-btn')) {

            // Find the container to remove
            const listItem = event.target.closest('.item-container');

            if (listItem) {
                listItem.remove();

                // Calculate new count based on remaining items
                const currentCount = document.querySelectorAll('.item-container').length;

                // Update the UI
                updateCount(currentCount);

                // Show feedback
                showToast("Item removed!");
            }
        }
    });
}