/*
    Name: Vaishakh Anil Kumar
    C#: C0877469
    Product: Air Fryers
*/

/**
 * Hamburger Menu - Opens the navigation
 */
function hamburger() {
    body = document.querySelector('body');
    menu = document.getElementById('hamburger');
    menuItems = document.getElementById('menu-items');

    if(menu.classList.contains('close-button')) {
        menu.classList.remove('close-button');
        menuItems.classList.add('desktop-tablet');
        body.classList.remove('prevent-scroll');

        menuItems.classList.remove('mobile-menu-options');
    } else {
        menu.classList.add('close-button');
        menuItems.classList.add('mobile-menu-options');
        body.classList.add('prevent-scroll');
        
        menuItems.classList.remove('desktop-tablet');
    }
}