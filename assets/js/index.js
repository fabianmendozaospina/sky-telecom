'use strict';

import { select, selectAll, listen } from "./utils.js";


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const modal = document.getElementById('loginModal'); 
const modalOpen = document.querySelector('.login'); 
const modalClose = document.querySelector('.close'); 

dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

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

modalOpen.addEventListener('click', function (event) { 
    event.preventDefault();
    modal.style.display = 'block'; 
    document.body.classList.add('modal-open');
}); 

modalClose.addEventListener('click', function () { 
    modal.style.display = 'none'; 
    document.body.classList.remove('modal-open');
    
}); 

window.addEventListener('click', function (event) { 
    if (event.target === modal) { 
        modal.style.display = 'none'; 
        document.body.classList.remove('modal-open'); 
    }    
});
