'use strict';

import { select, getElement, listen } from "./utils.js";

const dropdownBtn = select('.dropdown-btn');
const dropdownContent = select('.dropdown-content');
const modal = getElement('loginModal'); 
const modalOpen = select('.login'); 
const modalClose = select('.close'); 

dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

listen('click', window, (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

listen('click', modalOpen, (event) => { 
    event.preventDefault();
    modal.style.display = 'block'; 
    document.body.classList.add('modal-open');
}); 

listen('click', modalClose, () => { 
    modal.style.display = 'none'; 
    document.body.classList.remove('modal-open');
    
}); 

listen('click', window, (event) => { 
    if (event.target === modal) { 
        modal.style.display = 'none'; 
        document.body.classList.remove('modal-open'); 
    }    
});