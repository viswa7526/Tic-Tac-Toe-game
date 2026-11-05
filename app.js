let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msgcon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const resetgame = () => {
    turn0 = true;
    enabledbox();
    msgcon.classList.add("hide");
}


let turn0 = true; //playerO

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0){
            box.innerText = "O";
            box.style.color = "darkred";

            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledbox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.color = "";
    }
};

const showwinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledbox();

}

const checkwinner = () =>{
    for(pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val) {
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);

            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
