// Search/Filter (Use Debounce)
// Wrap the filter logic in a debounce function with a 500ms delay
// Show or hide <li> items based on whether the text includes the search term 
// If no items match, show a "No results found" message

const itemList = document.getElementById('item-list');
const searchInput = document.getElementById('searchItems');

// Debounce function
export function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

export function filterItems() {
    const userInput = searchInput.value.toLowerCase();
    const items = itemList.querySelectorAll('li');
    let visibleCount = 0;

    items.forEach(function (li) {
        // check searched word with text inside the <span>
        const text = li.querySelector('span').textContent.toLowerCase();
        if (text.includes(userInput)) {
            li.style.display = ''; //show item
            visibleCount++;
        } else {
            li.style.display = 'none'; // hide item
        }
    });

    // Show or hide "No results found"
    const noResults = document.getElementById('no-results');

    if (visibleCount === 0 && userInput !== '') {
        noResults.style.display = 'block';
        itemList.style.display = "none";
    } else {
        noResults.style.display = 'none';
    }
}

