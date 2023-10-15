// JavaScript to handle image click and update preview image
const productThumbnails = document.querySelectorAll('.product-thumnail');
const previewImage = document.getElementById('preview-image');

// Attach click event listener to each product thumbnail
productThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        // Set the clicked image source to the preview image source
        previewImage.src = thumbnail.src;
        
    });
});


function showTab(tabId) {
    // Get all tab content elements
    var tabContents = document.querySelectorAll('.tab-details');

    // Hide all tab content
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = 'none';
    });

    // Show the clicked tab content
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

const menuToggle = document.getElementById('mobile-menu');
const menu = document.getElementById('navlink-mobile');

menuToggle.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});
