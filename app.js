
/**
 * Dropdown menu
 */
const menudropdown = document.querySelector('a.menudropdown');
  
menudropdown.addEventListener('mouseenter', showMenu);
menudropdown.addEventListener('mouseleave', hideMenu);

function showMenu() { 
    const ul = this.nextElementSibling 
    ul.style.display = 'block'; 
    ul.addEventListener('mouseenter', function() {
        this.style.display = 'block';  
    }); 
}
function hideMenu() { 
    const ul = this.nextElementSibling 
    ul.style.display = 'none'; 
    ul.addEventListener('mouseleave', function() {
        this.style.display = 'none';
    });
}
