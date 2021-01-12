const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form Submit Event

form.addEventListener('submit', addItem);
//Delete eventListener
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


//=======ADD ITEM---------------------------------------

function addItem(e) {
    e.preventDefault();

    // Get 'input' value
    const newItem = document.getElementById('item').value;

    // Create li element

    let li = document.createElement('li');

    // add class to
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    let deleteBtn = document.createElement('button');

    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text node with delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // append li to list
    itemList.appendChild(li);
};

//=========REMOVE ITEM----------------------------------------------------
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Certain?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    //convert everything to lower case
    let text = e.target.value.toLowerCase();
    // get lis to filter
    let items = itemList.getElementsByTagName('li');
    // convert html collection to array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        // compare itemName to search box text
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}