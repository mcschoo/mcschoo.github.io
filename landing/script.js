// Smooth scroll down from landing page
const scrollDown = document.querySelector(".scroll-down");
if (scrollDown) {
  scrollDown.addEventListener("click", () => {
    document.querySelector(".planet-section").scrollIntoView({ behavior: "smooth" });
  });
}

// Planet carousel logic
const planets = document.querySelectorAll(".planet-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let activeIndex = 1; // Mars by default

function updateCarousel() {
  planets.forEach((planet, i) => {
    planet.classList.toggle("active", i === activeIndex);
  });
}

if (prev && next) {
  prev.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + planets.length) % planets.length;
    updateCarousel();
  });

  next.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % planets.length;
    updateCarousel();
  });
}

// Click to go to planet page
planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    const url = planet.getAttribute("data-planet");
    if (url) window.location.href = url;
  });
});

// Initialize
updateCarousel();
