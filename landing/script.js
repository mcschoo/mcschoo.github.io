// Smooth scroll down from landing page
document.querySelector(".scroll-down").addEventListener("click", () => {
  document.querySelector(".planets").scrollIntoView({ behavior: "smooth" });
});

// Planet carousel logic
const planets = document.querySelectorAll(".planet");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let activeIndex = 1; // Mars by default

function updateCarousel() {
  planets.forEach((planet, i) => {
    planet.classList.toggle("active", i === activeIndex);
  });
}

prev.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + planets.length) % planets.length;
  updateCarousel();
});
next.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % planets.length;
  updateCarousel();
});

// Click to go to planet page
planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    const url = planet.getAttribute("data-planet");
    if (url) window.location.href = url;
  });
});

// Initialize
updateCarousel();
