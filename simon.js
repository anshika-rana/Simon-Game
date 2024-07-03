let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let btns=["red","yellow","blue","purple"];
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game get started");
        start=true;
        levelup();
    }
});
let h4=document.querySelector("h4");


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}
function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

function checkAns(index){
    if(userseq[index]==gameseq[index]){
        if(userseq.length==gameseq.length){
         setTimeout(levelup,1000);
        }
    }
    else{
        h4.innerHTML=`Game Over your score is ${level} <br> Press any key to start again`;
        reset;
    }

}


function levelup(){
    userseq=[];
    level++;
    h4.innerText=`Level ${level}`;
    
    let rannum=Math.floor(Math.random()*3);
    let rancolor=btns[rannum];
    let randombtn=document.querySelector(`.${rancolor}`);

    gameseq.push(rancolor);
    console.log(gameseq);
    gameFlash(randombtn);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}