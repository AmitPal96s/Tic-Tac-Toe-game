let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newb = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let container = document.querySelector(".msg-container");
let hide = document.querySelector(".hide");
let turnO = true;
let count=0;
const winpatterns = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],];

const newgame=()=>{
    turnO=true;
    count=0;
    enableboxs();
    container.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let inner=box.innerText;
        if (turnO) {
            box.innerText= "0";
            turnO = false;
            box.style.color="red";
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color="yellow"
        }
        box.disabled = true;
        
        checkwinner();
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            showdraw();
        }
    });
});

const showdraw=()=>{
    msg.innerText=`draw XO`;
    container.classList.remove("hide");
    disableboxs();

};

 const enableboxs=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

 const disableboxs=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }

const showinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    container.classList.remove("hide");
    disableboxs();
};

const checkwinner = () => {
    for (pattern of winpatterns) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;
        if (post1val != "" && post2val != "" && post3val != "") {
            if (post1val === post2val && post2val == post3val) 
                {
                    showinner(post1val);
                    return true;
                }
        };    
    }
return false;
}
newb.addEventListener("click",newgame);