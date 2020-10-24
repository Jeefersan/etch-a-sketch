let gridSize = 40;
const container = document.querySelector(".main-container");
const DEFAULT_BG_COLOR = "#e4e3e3";
let drawingColor = "black";
let isRainbowColor = false;

createGrid(gridSize);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const squareGrid = document.createElement("div");
    squareGrid.classList.add("square");
    container.appendChild(squareGrid);
  }

  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  setupSquares();
}

function setupSquares() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      draw(this);
    });
  });
}

function toggleEraser() {
  drawingColor = DEFAULT_BG_COLOR;
}

function toggleBlackColor() {
  isRainbowColor = false;
  drawingColor = "black";
}

function draw(sq) {
  if (!isRainbowColor) {
    sq.style.backgroundColor = drawingColor;
  } else {
    sq.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}

function erase(sq) {
  sq.style.backgroundColor = DEFAULT_BG_COLOR;
}

function toggleRainbowColor() {
  isRainbowColor = true;
}

function resizeGrid() {
  gridSize = prompt("What size grid? Pick a size between 20-100");
  while (gridSize < 20 || gridSize > 100) {
    alert("Please enter a valid number between 20-100. Default is 40");
    gridSize = prompt("What size grid? Pick a size between 20-100");
  }
  container.innerHTML = "";
  isRainbowColor = false;
  createGrid(gridSize);
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    erase(square);
  });
}
