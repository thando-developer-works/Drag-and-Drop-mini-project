const divBoxes = document.querySelectorAll(".div-box");
const image = document.querySelector(".image");

divBoxes.forEach((div) => {
  div.addEventListener("dragover", (e) => {
    e.preventDefault();
    div.classList.add("hovered");
  });

  div.addEventListener("dragleave", () => {
    div.classList.remove("hovered");
  });

  div.addEventListener("drop", () => {
    div.appendChild(image);
    div.classList.remove("hovered");
  });
});
