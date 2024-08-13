console.log("Welcome to js")

let startBtn = document.querySelector(".start-btn");
let srt= document.querySelector(".start");
let main = document.querySelector(".main");
let newBtn = document.querySelector(".new-btn");
let userAllDiv = document.querySelectorAll(".user-div");
let compAllDiv = document.querySelectorAll(".comp-div");
let animation = document.querySelector(".animation");
let user = document.querySelector(".youScore");
let comp = document.querySelector(".comScore");
let img = document.querySelectorAll("img");

let userScore = 0;
let compScore= 0;
let removeDisplay=()=>{
    main.classList.remove("display");
}
startBtn.addEventListener("click",(evt)=>{
    srt.style.display="none";
    removeDisplay()
})

let activeHover= async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            for(let div of userAllDiv){
                div.classList.add("user-div");
                div.disabled=false;
            }
            animation.parentElement.style.position="static"
            animation.innerText="Rock Paper Scissors"
            for(let im of img){
                im.style.border=""
            }
        }, 1000);
    })
}
let removeHover=()=>{
    for(let div of userAllDiv){
        div.classList.remove("user-div");
        div.disabled=true;
    }
}

for(let div of userAllDiv){
    div.addEventListener("click",(evt)=>{
        let value=evt.target.alt
        evt.target.style.border= "5px solid #081b31";
        removeHover()
        computerValue(value)
    })
}
let animationWork=async()=>{
return new Promise ((resole,reject)=>{
    setTimeout(() => {
        animation.parentElement.style.position="absolute"
        resole("success");
        }, 900);
    })
}
let checkWinner= async (n)=>{
    animation.innerText=n;
    await animationWork();
    await activeHover()
}

let computerValue =(value)=>{
    let rand =Math.floor(Math.random()*3)
    for(let div of compAllDiv){
       if(div.value==rand){
            div.firstElementChild.style.border="5px solid #081b31";
       }
    }
    if(value==rand){
        let n = "Draw";
        checkWinner(n)
    }
    else if (value == 0 && rand == 1 || value == 1 && rand == 2 || value == 2 && rand == 0) {
        let n = "You Loose ! ";
        checkWinner(n);
        compScore++;
        console.log(compScore)
        comp.innerText=`Comp. Score - ${compScore}`
    } 
    else if (value == 0 && rand == 2 || value == 1 && rand == 0 || value == 2 && rand == 1) {
        let  n = "You Won ! ";
        checkWinner(n);
        userScore++;
        console.log(userScore)
        user.innerText=`Your Score - ${userScore}`
    }
    else{
        let n = "Chutiye !!";
        checkWinner(n);
    }
}

newBtn.addEventListener("click",(evt)=>{
    location.reload();
})