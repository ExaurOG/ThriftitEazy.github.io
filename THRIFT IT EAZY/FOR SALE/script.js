const loginModal = document.getElementById("login-modal");
const loginButton = document.querySelector(".nav-links li a[href='#login']");
const closeModalButton = document.getElementById("close-modal");

loginButton.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    loginModal.style.display = "none";
});

/*ABOUT MUSIC ARTIST */

// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function () {
    const artistLinks = document.querySelectorAll('.artist-link');

    artistLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const artistId = this.getAttribute('data-artist');
            loadArtistPage(artistId);
        });
    });

    function loadArtistPage(artistId) {
        // Hide other sections (e.g., welcome and artist list)
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('artist-list').style.display = 'none';

        // Load the artist's page using AJAX or other methods
        // For simplicity, let's assume the artist's pages are named artist1.html, artist2.html, etc.
        const artistPageUrl = `${artistId}.html`;

        // Fetch the artist's page content
        fetch(artistPageUrl)
            .then((response) => response.text())
            .then((html) => {
                // Display the artist's page content
                const artistPageContainer = document.getElementById('artist-page-container');
                artistPageContainer.innerHTML = html;
                artistPageContainer.style.display = 'block';
            })
            .catch((error) => {
                console.error(`Error loading artist page: ${error}`);
            });
    }
});
