function toggleMenu() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}

function myFunction() {
    var myDropdown = document.getElementById('myDropdown');
    myDropdown.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.link') && !event.target.matches('.fa-bars') && !event.target.matches('#btnsty')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        var menubar = document.getElementById('dropdownMenu');
        if (menubar.classList.contains('show')) {
            menubar.classList.remove('show');
        }
    }
}