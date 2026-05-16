// MOBILE NAV TOGGLE
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// PORTFOLIO FILTER
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".portfolio-items .item");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    items.forEach(item => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        item.style.display = item.classList.contains(filter)
          ? "block"
          : "none";
      }
    });
  });
});

// FORM SUBMISSION (DUMMY)
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Demo request submitted! (This is dummy data)");
});

// Close mobile menu on link click (better UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});