const emailCheckForm = document.querySelector(".emailCheck form");
const newPassForm = document.querySelector(".newPass form");
const emailCheckDiv = document.querySelector(".emailCheck");
const newPassDiv = document.querySelector(".newPass");

emailCheckForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the email input value
  const emailInput = emailCheckForm.querySelector("input[type='email']");
  const email = emailInput.value;

  // Toggle the visibility of the email check and new password forms
  emailCheckDiv.style.display = "none";
  newPassDiv.style.display = "block";
});

newPassForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the password input values
  const passInput = newPassForm.querySelector("#pass");
  const conPassInput = newPassForm.querySelector("#ConPass");
  const password = passInput.value;
  const confirmPassword = conPassInput.value;
  const link = "../login.html";

  // Compare the password and confirm password inputs
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
  } else {
    // Show a success message
    alert("Your password has been updated successfully!");
    window.location = link;
    // Reset the form
    newPassForm.reset();
    emailCheckForm.reset();
  }
});
// const homeButton = document.getElementById("btn2");
// const mailInput = document.getElementById("mail");

// function returnHome() {
//   mailInput.removeAttribute("required");
//   const link2 = "../index.html";
//   window.location = link2;
// }
// homeButton.addEventListener("click", returnHome);
