// Vendor Data
const vendors = [
    { id: 1, name: 'COEP Xerox Center', location: 'Wellesely Rd, Shivajinagar, Pune-411 005', services: ['A4', 'A3', 'Color', 'B&W'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/printing-press-produces-multi-colored-printouts_752325-18319.jpg?size=626&ext=jpg&semt=ais_hybrid' },
    { id: 2, name: 'Jumbo XeroX Services', location: 'Chandan Nagar, Pune', services: ['A4', 'A3', 'Color', 'B&W'], status: 'Closed', image: 'https://img.freepik.com/free-vector/flat-illustration-printing-industry_23-2148897730.jpg?ga=GA1.2.598515694.1706235890&semt=ais_hybrid' },
    { id: 3, name: 'COEP Hostel Xerox', location: 'Wellesely Rd, Shivajinagar, Pune-411 005', services: ['A4', 'A3', 'Color', 'B&W'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-vector/digital-printing-concept-illustration_52683-35055.jpg?ga=GA1.2.598515694.1706235890&semt=ais_hybrid' },
    { id: 4, name: 'Rapid Prints', location: 'FC Road, Pune', services: ['Posters', 'Bulk Printing'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-vector/picture-printer-with-colorful-background_1120557-62390.jpg?ga=GA1.2.598515694.1706235890&semt=ais_hybrid' }
];

// Popular Services Data



const popularVendors = [
    { id: 200, name: 'Speedy Prints', location: 'MG Road, Pune', services: ['Banners', 'Flyers'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-vector/tshirt-printing-process-concept-press-workers-work_1316704-12862.jpg?ga=GA1.2.598515694.1706235890&semt=ais_hybrid' },
    { id: 201, name: 'Express Copy', location: 'Karve Road, Pune', services: ['Color Xerox', 'Bulk Printing'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-vector/printing-industry-flat-design-illustration_23-2148898871.jpg?ga=GA1.2.598515694.1706235890&semt=ais_hybrid' },
    { id: 202, name: 'QuickPrint', location: 'Deccan, Pune', services: ['A4', 'Posters'], status: 'Closed', image: 'https://img.freepik.com/free-photo/woman-working-office-using-printer_23-2149456970.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 203, name: 'Pro Copy Center', location: 'JM Road, Pune', services: ['Flyers', 'Banners'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/large-format-digital-printing-machine-printing-colorful-floral-pattern_993198-14841.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 204, name: 'Rapid Xerox', location: 'FC Road, Pune', services: ['A4', 'Color Xerox'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/largeformat-print-shop-with-different-types-media-finishing-equipment_1314467-206537.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 205, name: 'Fast Prints', location: 'Swargate, Pune', services: ['Posters', 'Bulk Printing'], status: 'Closed', image: 'https://img.freepik.com/premium-photo/printer-with-word-no-it_427757-26383.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 206, name: 'Prime Print', location: 'Aundh, Pune', services: ['Flyers', 'Business Cards'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/modern-printing-machine-with-tshirt-printshop_1356022-4828.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' }
];

// Offers & Discounts Data
const offerVendors = [
    { id: 300, name: 'Super Saver Xerox', location: 'Deccan Gymkhana, Pune', services: ['Discount on Bulk'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/multicolored-paper-that-says-word-bottom_427757-30319.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 301, name: 'Print Deals', location: 'Kothrud, Pune', services: ['Banners', 'Flyers'], status: 'Closed', image: 'https://img.freepik.com/free-photo/hands-working-network-graphic-overlay-banner-desk_53876-101278.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 302, name: 'FastTrack Xerox', location: 'Shivaji Nagar, Pune', services: ['A4', 'A3', 'B&W'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/ultrasharp-photo-depicting-office-professional-plotter-large-format-photocopier-printer_1252624-16898.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 303, name: 'Sharp Prints', location: 'Koregaon Park, Pune', services: ['Brochures', 'Business Cards'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-photo/printing-press-machine-mass-production-action_91128-4369.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 304, name: 'Print Factory', location: 'Pimpri, Pune', services: ['Flyers', 'Banners'], status: 'Closed', image: 'https://img.freepik.com/free-vector/colored-isometric-printing-house-polygraphy-composition-with-employer-polygraphy-office-vector-illustration_1284-30540.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 305, name: 'Xerox World', location: 'Pimple Saudagar, Pune', services: ['A4', 'A3', 'B&W', 'Color'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-vector/digital-print-house-with-latest-technology-ers-team-providing-solutions-customers-projects-isometric-composition_1284-26670.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 306, name: 'Rapid Copy', location: 'Katraj, Pune', services: ['Flyers', 'Bulk Printing'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-vector/flat-design-printing-industry_23-2148887522.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' }
];



const newArrivalsVendors = [
    { id: 400, name: 'NewXerox', location: 'JM Road, Pune', services: ['A4', 'Color'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/printing-press-produces-multi-colored-printouts_752325-18312.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 401, name: 'FirstPrints', location: 'Baner, Pune', services: ['Posters', 'Flyers'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/piece-paper-that-has-word-x-it_427757-29277.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 402, name: 'Quick Copies', location: 'Kalyani Nagar, Pune', services: ['A4', 'A3', 'B&W'], status: 'Closed', image: 'https://img.freepik.com/premium-photo/paper-that-says-anime-it_427757-27382.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 403, name: 'Xpress Print', location: 'Viman Nagar, Pune', services: ['Flyers', 'Brochures'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/paper-that-says-happy-birthday-it_1358690-4787.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 404, name: 'Elite Prints', location: 'Aundh, Pune', services: ['Posters', 'Bulk Printing'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-photo/undomesticated-feline-eye-reflects-dangerous-machinery-indoors-generative-ai_188544-15479.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 405, name: 'Print Hub', location: 'Hadapsar, Pune', services: ['A4', 'A3', 'Color', 'B&W'], status: 'AVAILABLE', image: 'https://img.freepik.com/free-vector/isometric-printing-industry_23-2148890654.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { id: 406, name: 'Mega Prints', location: 'Wakad, Pune', services: ['Posters', 'Flyers', 'Banners'], status: 'AVAILABLE', image: 'https://img.freepik.com/premium-photo/digital-printing-machines-operating-with-vibrant-designs-print-shop-generative-ai_437323-23765.jpg?size=626&ext=jpg&ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    
];


// Function to render vendors
function renderVendors(vendorData, listId) {
    const vendorList = document.getElementById(listId);
    vendorList.innerHTML = '';
    vendorData.forEach((vendor) => {
        const vendorCard = `
        <div class="vendor-card">
            <img src="${vendor.image}" alt="${vendor.name}">
            <h3>${vendor.name}</h3>
            <p>${vendor.location}</p>
            <p>Services: ${vendor.services.join(', ')}</p>
            <p class="vendor-status ${vendor.status.toLowerCase()}">${vendor.status}</p>
            <button class="vendor-order-button" onclick="placeOrder(${vendor.id})" ${vendor.status === 'Closed' ? 'disabled' : ''}>
                ${vendor.status === 'Closed' ? 'Closed' : 'Place Order'}
            </button>
        </div>`;
        vendorList.innerHTML += vendorCard;
    });
}

// Function to handle Place Order
function placeOrder(vendorId) {
    // Find the vendor by ID
    let allVendors = [...vendors, ...popularVendors, ...offerVendors, ...newArrivalsVendors];
    const selectedVendor = allVendors.find(vendor => vendor.id === vendorId);

    if (selectedVendor) {
        // Save vendor details to localStorage
        const vendorDetails = {
            name: selectedVendor.name,
            location: selectedVendor.location
        };
        localStorage.setItem('selectedVendor', JSON.stringify(vendorDetails));

        // Redirect to order form
        window.location.href = 'order.html'; // Adjust to your actual order form path
    }
}

// Render all sections
document.addEventListener('DOMContentLoaded', function() {
    renderVendors(vendors, 'vendor-list');
    renderVendors(popularVendors, 'popular-list');
    renderVendors(offerVendors, 'offers-list');
    renderVendors(newArrivalsVendors, 'new-arrivals-list');

    // Geolocation prompt
    if (!localStorage.getItem('locationPermission')) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    localStorage.setItem('locationPermission', 'granted');
                    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
                },
                function(error) {
                    console.error("Error occurred. Error code: " + error.code);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    } else {
        console.log("Location permission already granted.");
    }
});
























// Search and filtering logic
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');
    const closeIcon = document.getElementById('close-icon');

    // Show search input on search icon click
    searchIcon.addEventListener('click', function () {
        searchInput.classList.add('visible');
        closeIcon.classList.remove('hidden');
        searchInput.focus(); // Focus on search bar
    });

    // Close search input on close icon click
    closeIcon.addEventListener('click', function () {
        searchInput.classList.remove('visible');
        closeIcon.classList.add('hidden');
        searchInput.value = ''; // Clear search input
        resetVendors(); // Reset the vendor list
    });

    // Handle Enter key for search
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            filterVendors(searchInput.value.trim().toLowerCase());
        }
    });

    // Search logic
    function filterVendors(query) {
        if (!query) return;

        // Combine all vendor arrays for easy search
        let allVendors = [...vendors, ...popularVendors, ...offerVendors, ...newArrivalsVendors];

        const filteredVendors = allVendors.filter(vendor => {
            return vendor.name.toLowerCase().includes(query) ||
                   vendor.services.join(', ').toLowerCase().includes(query) ||
                   vendor.location.toLowerCase().includes(query);
        });

        // Render filtered vendors in each section
        renderVendors(filteredVendors, 'vendor-list'); // Example for the first section
        // You can choose to segregate vendors back into sections based on the result
    }

    // Reset vendor sections when the search is cleared
    function resetVendors() {
        renderVendors(vendors, 'vendor-list');
        renderVendors(popularVendors, 'popular-list');
        renderVendors(offerVendors, 'offers-list');
        renderVendors(newArrivalsVendors, 'new-arrivals-list');
    }
});









































// Function to handle Vendor form submission
document.getElementById('vendor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const shopName = document.getElementById('shopName').value;
    const shopAddress = document.getElementById('shopAddress').value;
    const vendorEmail = document.getElementById('vendorEmail').value;
    const vendorPhone = document.getElementById('vendorPhone').value;
    const vendorImage = document.getElementById('vendorImage').files[0];
    const vendorServices = Array.from(document.getElementById('vendorServices').selectedOptions).map(option => option.value);

    // Create a new vendor card
    const newVendor = {
        id: Date.now(),  // Use current timestamp as unique ID
        name: shopName,
        location: shopAddress,
        services: vendorServices,
        status: 'AVAILABLE',
        image: URL.createObjectURL(vendorImage) // Create image URL from the uploaded file
    };

    // Get existing vendors from local storage or create an empty array if none exist
    let vendors = JSON.parse(localStorage.getItem('vendors')) || [];

    // Add the new vendor to the array
    vendors.push(newVendor);

    // Save the updated vendor list to local storage
    localStorage.setItem('vendors', JSON.stringify(vendors));

    // Display registration success message
    alert('Registration successful!');

    // Redirect to index.html after a short delay
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 1000);
});

// Function to dynamically load vendor cards on the homepage
function loadVendors() {
    const vendorList = document.getElementById('vendor-list');
    vendorList.innerHTML = ''; // Clear any existing vendor cards

    // Get vendors from local storage
    const vendors = JSON.parse(localStorage.getItem('vendors')) || [];

    vendors.forEach(vendor => {
        // Create a vendor card
        const vendorCard = document.createElement('div');
        vendorCard.classList.add('vendor-card');

        vendorCard.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <h3>${vendor.name}</h3>
            <p>${vendor.location}</p>
            <p>Services: ${vendor.services.join(', ')}</p>
            <p>Status: ${vendor.status}</p>
            <button>Place Order</button>
        `;

        vendorList.appendChild(vendorCard);
    });
}

// Load vendors when index.html is opened
if (window.location.pathname.includes('index2.html')) {
    window.onload = loadVendors;
}



document.querySelector('.profile-icon').addEventListener('click', () => {
    window.location.href = 'profile.html';
});




























  










