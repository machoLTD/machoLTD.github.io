function toggleRules(id) {
    const rulesGrid = document.getElementById(id);
    const header = rulesGrid.previousElementSibling;
    const chevron = header.querySelector('.fa-chevron-down');
    

    document.querySelectorAll('.rules-grid').forEach(grid => {
        if (grid.id !== id && grid.classList.contains('active')) {
            grid.classList.remove('active');
            grid.previousElementSibling.classList.remove('active');
        }
    });
    
    rulesGrid.classList.toggle('active');
    header.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {

}); 