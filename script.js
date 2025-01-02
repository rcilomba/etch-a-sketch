const sketchContainer = document.querySelector("#sketch-container");

function createGrid(size){
    
    sketchContainer.innerHTML = "";
    const squareSize = 960 / size;

    sketchContainer.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`; 
    sketchContainer.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;

for(let i = 0; i < size* size; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`; 
    square.style.height = `${squareSize}px`;
    sketchContainer.append(square);
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "black";
    })
}
}

createGrid(16);



const sizeChangeInput = document.createElement("input");
sizeChangeInput.placeholder = "Set size: 2-100";
document.body.insertBefore(sizeChangeInput, document.querySelector("#container"));

const sizeChangeButton = document.createElement("button");
sizeChangeButton.classList.add("size-buttton")
sizeChangeButton.textContent = "Change size";
document.body.insertBefore(sizeChangeButton, document.querySelector("#container"));


sizeChangeButton.addEventListener("click", ()=>{
    const gridSize = sizeChangeInput.value;
    console.log("gridsize", gridSize);
    if(gridSize < 2 || gridSize > 100){
        alert("Size must be between 2 and 100")
        return;
    }
    createGrid(gridSize);
})

