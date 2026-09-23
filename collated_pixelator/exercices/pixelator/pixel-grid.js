let grid = document.querySelector("#grid");
let colorPicker = document.querySelector("#color");
let gridSize = document.querySelector("#size");
let sizeLabel = document.querySelector("#size-label");

function paintPixel(event) {
  event.target.style.backgroundColor = colorPicker.value;
}

let size = Number(gridSize.value);
sizeLabel.value = `${size} × ${size}`;
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
  let pixel = document.createElement("button");
  pixel.type = "button";
  pixel.className = "pixel";
  pixel.setAttribute("aria-label", `Pixel ${i + 1}`);
  pixel.addEventListener("click", paintPixel);
  grid.appendChild(pixel);
}

gridSize.addEventListener("input", function () {
  let size = Number(gridSize.value);
  sizeLabel.value = `${size} × ${size}`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("button");
    pixel.type = "button";
    pixel.className = "pixel";
    pixel.setAttribute("aria-label", `Pixel ${i + 1}`);
    pixel.addEventListener("click", paintPixel);
    grid.appendChild(pixel);
  }
});
