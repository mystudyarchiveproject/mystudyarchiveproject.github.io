// nav hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (ham && navLinks) {
    ham.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
});
 