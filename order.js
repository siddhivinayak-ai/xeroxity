document.addEventListener('DOMContentLoaded', function() {
    // Retrieve vendor information from localStorage
    const vendor = JSON.parse(localStorage.getItem('selectedVendor'));

    // Display the vendor name and address in bold
    if (vendor) {
        const vendorInfo = document.getElementById('vendorInfo');
        vendorInfo.innerHTML = `<p><strong>${vendor.name}</strong></p><p><strong>${vendor.location}</strong></p>`;
    }

    // Pricing data
    const pricing = {
        A4: {
            bw: { single: 2, double: 3 },
            color: { single: 10, double: 15 }
        },
        A3: {
            bw: { single: 4, double: 6 },
            color: { single: 20, double: 30 }
        }
    };

    // Form element references
    const paperSizeSelect = document.getElementById('paperSize');
    const printTypeSelect = document.getElementById('printType');
    const sideTypeSelect = document.getElementById('sideType');
    const pagesInput = document.getElementById('pages');
    const totalAmountSpan = document.getElementById('totalAmount');

    // Calculate total amount
    function calculateTotal() {
        const paperSize = paperSizeSelect.value;
        const printType = printTypeSelect.value;
        const sideType = sideTypeSelect.value;
        const pages = parseInt(pagesInput.value) || 1;

        const pricePerPage = pricing[paperSize][printType][sideType];
        const totalAmount = pricePerPage * pages;

        totalAmountSpan.textContent = totalAmount;
    }

    // Event listeners for recalculating total amount
    paperSizeSelect.addEventListener('change', calculateTotal);
    printTypeSelect.addEventListener('change', calculateTotal);
    sideTypeSelect.addEventListener('change', calculateTotal);
    pagesInput.addEventListener('input', calculateTotal);

    // Initial calculation on page load
    calculateTotal();

    // Handle form submission
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const personName = document.getElementById('personName').value;
        const deliveryAddress = document.getElementById('deliveryAddress').value;
        const totalAmount = totalAmountSpan.textContent;

        // Retrieve existing orders or create a new array
        const orders = JSON.parse(localStorage.getItem('orders')) || [];

        // Add new order to orders array
        orders.push({ vendorName: vendor.name, personName, deliveryAddress, totalAmount });

        // Save updated orders array back to localStorage
        localStorage.setItem('orders', JSON.stringify(orders));

        // Redirect to order history page or confirmation page
        window.location.href = 'order-his.html'; // Adjust to your actual order history path
    });
});
