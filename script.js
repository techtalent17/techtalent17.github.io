document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("contact-form");
   const messageBox = document.getElementById("contact-message");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      messageBox.textContent = "Message sent successfully!";
      messageBox.style.color = "green";
      form.reset();
   });
});
