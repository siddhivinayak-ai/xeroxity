// Elements
const editButton = document.getElementById("edit-button");
const editPopup = document.getElementById("edit-popup");
const cancelButton = document.getElementById("cancel-button");
const editForm = document.getElementById("edit-form");

// Pre-fill form with localStorage data if available
const loadProfile = () => {
  const profile = JSON.parse(localStorage.getItem("profile")) || {
    name: "John Doe",
    role: "Customer",
    address: "123, Street Name, City",
    email: "johndoe@example.com",
    phone: "+91 1234567890",
  };

  // Update UI
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-role").textContent = `Role: ${profile.role}`;
  document.getElementById("profile-address").textContent = `Address: ${profile.address}`;
  document.getElementById("profile-email").textContent = `Email: ${profile.email}`;
  document.getElementById("profile-phone").textContent = `Phone: ${profile.phone}`;

  // Set form fields
  document.getElementById("name").value = profile.name;
  document.getElementById("role").value = profile.role;
  document.getElementById("address").value = profile.address;
  document.getElementById("email").value = profile.email;
  document.getElementById("phone").value = profile.phone;
};

// Open Edit Popup
editButton.addEventListener("click", () => {
  editPopup.style.display = "flex";
});

// Close Edit Popup
cancelButton.addEventListener("click", () => {
  editPopup.style.display = "none";
});

// Save Edited Profile
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Save to localStorage
  const profile = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  localStorage.setItem("profile", JSON.stringify(profile));

  // Update UI and close popup
  loadProfile();
  editPopup.style.display = "none";
});

// Load profile on page load
loadProfile();







