document.addEventListener("DOMContentLoaded", function() {
  // Load header and footer
  $("#header").load("header.html");
  $("#footer").load("footer.html");
  // Function to handle showing content after loading
  function showContent() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    // Fade out loader
    loader.classList.add("fade-out");
    // After fade-out, remove loader and show content
    setTimeout(function() {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500); // Time should match the CSS transition duration (0.5s)
  }
  // Check if header and footer have been loaded
  $("#header, #footer").on('load', function() {
    // All required elements are loaded, show content
    showContent();
  });

  // Handle window load event to ensure all resources are loaded
  window.addEventListener("load", function() {
    setTimeout(function() {
      showContent();
    }, 3000); // Simulated load time of 3 seconds
  });

  // Form submission handling
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Get form data
    var formData = new FormData(this);
    var name = formData.get("name");
    formData.append("subject", "New inquiry from " + name);
    // Send form data asynchronously using fetch
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        // Form submission successful, show success message with SweetAlert
        Swal.fire({
          icon: "success",
          title: "Thank you for your submission!",
          text: "We have received your form and will get back to you as soon as possible.",
          timer: 9000, // Auto close timer in milliseconds
          showConfirmButton: true, // Show the "OK" button
        });
        // Reset the form fields (optional)
        this.reset();
      } else {
        // Form submission failed, handle error
        console.error("Form submission failed:", response.statusText);
        alert("Form submission failed. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error occurred during form submission:", error);
      alert("An error occurred during form submission. Please try again later.");
    });
  });
});