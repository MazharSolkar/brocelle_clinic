document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\d{10}$/;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    if (name === "") {
      document.getElementById("nameError").textContent =
        "Name is required.";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("emailError").textContent =
        "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format.";
      isValid = false;
    }

    if (phone === "") {
      document.getElementById("phoneError").textContent =
        "Phone number is required.";
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message is required.";
      isValid = false;
    }

    if (isValid) {
      let formData = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };

      localStorage.setItem("contactFormData", JSON.stringify(formData));

      alert("Form submitted successfully! Data saved to localStorage.");
      document.getElementById("contactForm").reset();
    }
  });