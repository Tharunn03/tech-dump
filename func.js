const infoBtn = document.getElementById("infoBtn");
const dropBox = document.getElementById("dropBox");

infoBtn.addEventListener("click", () => {
  dropBox.classList.toggle("hidden");

  if (!dropBox.classList.contains("hidden")) {
    dropBox.style.animation = "none";
    void dropBox.offsetWidth;
    dropBox.style.animation = "";
  }
});

document.addEventListener("click", (e) => {
  if (!infoBtn.contains(e.target) && !dropBox.contains(e.target)) {
    dropBox.classList.add("hidden");
  }
});
