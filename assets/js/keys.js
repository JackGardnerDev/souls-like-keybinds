document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll('.key, .bound');

    keys.forEach(key => {
        const info = document.getElementById(`${key.id}Info`);
        
        key.addEventListener("mouseover", function() {
            info.style.display = "block";
        });
        
        key.addEventListener("mouseout", function() {
            info.style.display = "none";
        });
    });
});