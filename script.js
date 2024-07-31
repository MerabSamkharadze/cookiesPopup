// script.js
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptCookies = document.getElementById("acceptCookies");

  // Check if cookie consent has been given
  if (!localStorage.getItem("cookieConsent")) {
    cookieConsent.style.display = "block";
  }

  // Handle the accept button click
  acceptCookies.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    cookieConsent.style.display = "none";
  });
});
