'use strict';

// Get the dropdown button
const dropdownBtn = document.querySelector('.dropdown-btn');
// Get the dropdown content
const dropdownContent = document.querySelector('.dropdown-content');

// Add a click event to the dropdown button
dropdownBtn.addEventListener('click', function() {
    // Toggle the class that shows or hides the dropdown content
    dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}