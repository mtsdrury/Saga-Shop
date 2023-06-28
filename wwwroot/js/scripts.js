// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the menu toggle icon and the menu
    const menuToggle = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const submenuWrapper = document.querySelector('.submenu-wrapper');

    // Attach event listener to show the menu when hovering over the menu toggle icon
    menuToggle.addEventListener('mouseenter', () => {
        // Add the "show-menu" class to display the menu
        menu.classList.add('show-menu');

        // Calculate the position of the submenu wrapper
        const menuIconRect = menuToggle.getBoundingClientRect();
        const menuIconRight = menuIconRect.right;
        const menuIconTop = menuIconRect.top;

        // Set the position of the submenu wrapper
        submenuWrapper.style.left = `${menuIconRight}px`;
        submenuWrapper.style.top = `${menuIconTop}px`;
    });

    // Attach event listener to hide the menu when mouse leaves the menu area
    menu.addEventListener('mouseleave', () => {
        // Remove the "show-menu" class to hide the menu
        menu.classList.remove('show-menu');
    });
});
