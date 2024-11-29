'use strict';

import { select, listen } from "./utils.js";

const dropdownBtn = select('.dropdown-btn');
const dropdownContent = select('.dropdown-content');
const modal = select('.modal'); 
const modalOpen = select('.login'); 
const modalClose = select('.close'); 

dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

listen('click', dropdownBtn, () => {
    for (let i = 0; i < dropdownContent.length; i++) {
        const openDropdown = dropdownContent[i];
        
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
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