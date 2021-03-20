/** target the .toggle-icon (menu) to open and close the button */
const clickButton = document.querySelector('.toggle-icon');

/** here we will add an event listener, when the user clicks the toggle menu 
- a class of "is-active" will be added to header, and the menu will slide in. 
When the toggle icon is clicked again, the menu will close and the class will be 
removed from the header element. */

/** I've targeted the header in to add the class so I could also create close button 
for the menu is active. It's really up to you were you add your active class. */
clickButton.addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('is-active');
});
