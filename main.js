document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.logo');
    logoLink.addEventListener('click', function(event) {
        event.preventDefault();
        shuffleProducts();
    });

    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const identifier = document.getElementById('identifier').value;
            const password = document.getElementById('password').value;

            // Example: Simulate authentication
            if (identifier === 'user@example.com' && password === 'password') {
                // Redirect to the form page
                window.location.href = 'https://formsubmit.co/your@email.com';
            } else {
                // Show error message
                errorMessage.textContent = 'Invalid username or password';
            }
        });
    }

    // Check if user is authenticated on page load (simulate session persistence)
    const isAuthenticated = true; // Replace with actual authentication check

    if (isAuthenticated) {
        const headerIcons = document.querySelector('.header-icons');
        headerIcons.innerHTML = `
            <div class="user-icon">
                <a href="#" id="userMenu"><i class="uil uil-user"></i></a>
                <div id="userOptions" class="user-options">
                    <a href="profile.html">Profile</a>
                    <a href="login.html">Login</a>
                </div>
            </div>
            <a href="#"><i class="uil uil-shopping-bag"></i></a>
            <a href="#"><i class="uil uil-heart"></i></a>
            <a href="#"><i class="uil uil-bell"></i></a>
            <a href="#"><i class="uil uil-question-circle"></i></a>
            <a href="#"><i class="uil uil-globe"></i></a>
        `;

        const userMenu = document.getElementById('userMenu');
        const userOptions = document.getElementById('userOptions');

        userMenu.addEventListener('click', function(event) {
            event.preventDefault();
            userOptions.classList.toggle('show');
        });
    }
});

function shuffleProducts() {
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(productGrid.children);

    // Shuffle the product items
    for (let i = products.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        productGrid.appendChild(products[j]);
    }
}
