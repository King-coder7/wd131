// 1. Select the <select> element from the DOM
const themeSelect = document.getElementById('theme-select');

// Also select the logo image
const logo = document.querySelector('.logo');

// 2. Create the function that will handle the change
function changeTheme() {
    const selectedTheme = themeSelect.value; // 'light' or 'dark'

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.png'; // switch to white logo
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp'; // switch back to blue logo
    }
}

// 3. Add an event listener to the select element
themeSelect.addEventListener('change', changeTheme);
