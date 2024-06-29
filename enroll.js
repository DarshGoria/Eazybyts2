document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('enrollmentForm');
    const confirmation = document.getElementById('confirmation');
    const confirmMessage = document.getElementById('confirmMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const course = document.getElementById('course').value;
        
        confirmMessage.textContent = `${name}, you have successfully enrolled in the ${course.charAt(0).toUpperCase() + course.slice(1)} course!`;

        form.style.display = 'none';
        confirmation.style.display = 'block';
    });
});
