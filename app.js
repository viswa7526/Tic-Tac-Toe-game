let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset");

let turn0 = true; //playerO

const winpattern = [
    [0,1,3],
    [0,3,5],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click box");
    })
})