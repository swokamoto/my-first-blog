document.addEventListener('DOMContentLoaded', function() {
    let currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        document.body.dataset.mode = 'dark';
    } else {
        document.body.dataset.mode = 'light';
    }
});

const toggleMode = document.getElementById('toggleMode');


toggleMode.addEventListener('click', function() {
    let currentMode = localStorage.getItem('mode');
    
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
