// sets mode on page load
document.addEventListener('DOMContentLoaded', function() {
    let currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        document.body.dataset.mode = 'dark';
    } else {
        document.body.dataset.mode = 'light';
    }
});

// button to toggle dark mode
const toggleMode = document.getElementById('toggleMode');

// sets mode on button click
toggleMode.addEventListener('click', function() {
    let currentMode = localStorage.getItem('mode');
    
    // if mode is null, set to dark, else toggle between light and dark
    if (currentMode === null) {
        localStorage.setItem('mode', 'dark');
        document.body.dataset.mode = 'dark';
    } else if (currentMode === 'dark') {
        localStorage.setItem('mode', 'light');
        document.body.dataset.mode = 'light';    
    } else {
        localStorage.setItem('mode', 'dark');
        document.body.dataset.mode = 'dark';
    }   
});
