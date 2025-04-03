window.addEventListener('keyup', function(e) {
    const target = document.querySelector('.checkbox-green input:focus');
    if (e.key === 'Tab' && target) {
        target.parentElement.classList.add('focused');
    }
});

const checkboxes = document.querySelectorAll('.checkbox-green input');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('focusout', function() {
        this.parentElement.classList.remove('focused');
    });
});
