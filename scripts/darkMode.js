/* This is our code file for the Dark Mode functionality. 

For context, the functionality we have involves vanilla JS, DOM manipulation, and bootstrap

so it's more organized to have the codes separate from the once we have for Vue.js to implement modularity 

*/


//DarkMode toggle
const themeToggleBtn = document.getElementById('dark-mode');
const htmlElement = document.documentElement; // Targets the <html> tag
const THEME_KEY = 'appTheme';

function setTheme(theme) {

    // 1. Set the Bootstrap data attribute on the <html> element
    htmlElement.setAttribute('data-bs-theme', theme);

    // 2. Save the preference to Local Storage
    localStorage.setItem(THEME_KEY, theme);

    // 3. Update button text and styling
    themeToggleBtn.classList.remove('btn-dark', 'btn-light', 'btn-info', 'btn-warning', 'text-dark', 'text-light');

    //These take care of button's styling behavior, depending on the toggled mode

    if (theme === 'dark') {
        themeToggleBtn.textContent = '🟢 Dark Mode: On';
        themeToggleBtn.classList.add('btn-light', 'text-dark');

    } else {
        themeToggleBtn.textContent = '🔴 Dark Mode: Off';
        themeToggleBtn.classList.add('btn-dark', 'text-light');
    }

}


/**

 * Initializes the theme based on the saved preference in Local Storage.

 */

function initializeTheme() {

    // Load theme preference, defaults to 'light'
    let currentTheme = localStorage.getItem(THEME_KEY) || 'light';
    setTheme(currentTheme);
}


// --- Event Listener ---


// Check if the button exists before adding the listener (safety check)

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Get the current theme from the HTML attribute
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
   
        // Determine the opposite theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
        // Apply the new theme
        setTheme(newTheme);

    });

}


// Run this function immediately to load the user's saved theme on page startup.

initializeTheme();



