/*
    Name: Vaishakh Anil Kumar
    C#: C0877469
    Product: Air Fryers
*/

/**
 * Hamburger Menu - Opens the navigation
 */
function hamburger() {
    menu = document.getElementById('hamburger');
    menuItems = document.getElementById('menu-items');

    if(menu.classList.contains('close-button')) {
        menu.classList.remove('close-button');
        menuItems.classList.remove('mobile-menu-options');
        menuItems.classList.add('desktop-tablet');
    } else {
        menu.classList.add('close-button');
        menuItems.classList.add('mobile-menu-options')
        
        menuItems.classList.remove('desktop-tablet');
    }
}