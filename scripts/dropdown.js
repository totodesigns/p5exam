// __________________________ DROPDOWN ________________________

// array containing dropdown items
const dropdownItems = ["Valgmulighed ", "Valgmulighed ", "Valgmulighed ", "Valgmulighed "];

// toggle dropdown visibility & icon state
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");

    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.classList.toggle('active');
}

// toggle item color
// passed event as parameter in toggleItemColor
// then use event.target to access the affected element
function toggleItemColor(event) {
    event.target.classList.toggle("active");
}

// populate dropdown menu with items from array
function populateDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    
    dropdownItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item;
        // new div? its a child of dropdown-content
        dropdownContent.appendChild(div);

        div.addEventListener('click', function(event) {
            // stopPropagation stops the event received by the child's event handler from being passed
            // onto the parent's event handler, which means the parent doesn't register the click from the child
            // this is used so that the dropdown-content (parent) doesn't close when an item (child) within it is clicked
            event.stopPropagation();
            
            toggleItemColor(event);
        });
    });
}
// calls the function above whilst the page loads
document.addEventListener('DOMContentLoaded', populateDropdown);


// the inverse and half of what i do at the beginning
// close dropdown if user clicks outside of it
document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {

        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    document.querySelector('.dropbtn').classList.remove('active');
    }
});