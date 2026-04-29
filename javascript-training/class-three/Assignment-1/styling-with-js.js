const itemList = document.getElementById('item-list');

export function stylingWithJS() {
    // when mouse is over list, change bg color
    itemList.addEventListener('mouseover', function (e) {
        const li = e.target.closest('li');
        li.style.background = " rgb(220, 225, 232)";
    });

    // change bg  color back if mouse is not over
    itemList.addEventListener('mouseout', function (e) {
        const li = e.target.closest('li');
        li.style.background = "transparent";
    });
}   