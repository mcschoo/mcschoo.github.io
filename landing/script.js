// Small interactive hover animations
document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform += " scale(1.2)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = icon.style.transform.replace(" scale(1.2)", "");
  });
});
