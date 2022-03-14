const panels = document.querySelectorAll(".panel");

console.log(panels);

function toggleOpen() {
  console.log(!this.classList.value.includes("open"));
  if (this.classList.value.includes("open")) {
    this.classList.remove("open");
  } else {
    panels.forEach((panel) => {
      panel.classList.remove("open");
    });
    this.classList.toggle("open");
  }
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
