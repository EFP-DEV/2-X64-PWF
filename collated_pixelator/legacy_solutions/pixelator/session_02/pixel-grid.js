let pixel1 = document.querySelector("#pixel1");
let pixel2 = document.querySelector("#pixel2");
let pixel3 = document.querySelector("#pixel3");
let pixel4 = document.querySelector("#pixel4");

function paintPixel(event) {
  let clickedPixel = event.target;
  clickedPixel.classList.add("painted");
}

pixel1.addEventListener("click", paintPixel);
pixel2.addEventListener("click", paintPixel);
pixel3.addEventListener("click", paintPixel);
pixel4.addEventListener("click", paintPixel);
