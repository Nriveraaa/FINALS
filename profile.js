document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const profileForm = document.getElementById('profileForm');
    const ordersSection = document.querySelector('.orders-section');
    
    editProfileBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (profileForm.style.display === 'block') {
            profileForm.style.display = 'none';
            editProfileBtn.textContent = 'Edit Profile';
            ordersSection.style.display = 'block';
        } else {
            profileForm.style.display = 'block';
            editProfileBtn.textContent = 'Cancel';
            ordersSection.style.display = 'none';
        }
    });
});
