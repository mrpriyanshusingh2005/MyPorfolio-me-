var typed = new Typed(".text", {
    strings: ["Frontend Developer . . ." , "Programmer . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
emailjs.init("ivK_8lb6XkMXnRzPL"); // Replace with your actual public key from EmailJS

// Handle form submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_pyalb7f", "template_zaotyy5", form)
    .then(() => {
      alert("Message sent successfully!");
      form.reset(); // optional: clears the form after success
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    });
});