function change(){
  const delay = 3000;
  let lefthand = document.getElementById("left_hand");
  let righthand = document.getElementById("right_hand");
  
  let choices = ["rock", "paper", "scissors"];
  
  var leftans = Math.floor(Math.random() * choices.length);
  var rightans = Math.floor(Math.random() * choices.length);
  
  let left = choices[leftans];
  if (left == "rock"){
    lefthand.setAttribute("src", "pictures/rock.png");
  }
  else if(left == "paper"){
    lefthand.setAttribute("src", "pictures/paper.png");
  }
  else if(left == "scissors"){
    lefthand.setAttribute("src", "pictures/scissors.png");
  }
  else{
    console.log("error");
  }
  
  let right = choices[rightans];
  
  if (right == "rock"){
    righthand.setAttribute("src", "pictures/rock.png");
  }
  else if(right == "paper"){
    righthand.setAttribute("src", "pictures/paper.png");
  }
  else if(right == "scissors"){
    righthand.setAttribute("src", "pictures/scissors.png")
  }
  else{
    console.log("error");
  }
  setTimeout(change, delay);
  setTimeout(function(){
    lefthand.setAttribute("src", "pictures/rock.png");
    righthand.setAttribute("src", "pictures/rock.png");
  }, 1900);
}

addEventListener("DOMContentLoaded", function () {
  setTimeout(change, 3500);
})


function start(){
  const menu = document.getElementById("menu");
  menu.style.animation = "0.5s fade-out forwards";
  setTimeout(function () {
    menu.style.display = "none"
  ;},500);
    const startMenu = document.getElementById("start_menu");
    startMenu.style.animation = "0.3s fade-in forwards";
    const back = document.getElementById("backButton");
    back.style.animation = "0.3s fade-in forwards";
    setTimeout(function(){
      startMenu.style.display = "block";
      back.style.display = "block"
    },500)
    
  return
}

function backStart() {
  const menu = document.getElementById("menu");
  const startMenu = document.getElementById("start_menu");
  const back = document.getElementById("backButton");
  startMenu.style.animation = "0.3s fade-out forwards";
  back.style.animation = "0.3s fade-out forwards"
  
  setTimeout(function () {
    startMenu.style.display = "none";
    back.style.display = "none";
  },350)
  menu.style.animation = "0.3s fade-in forwards";
  setTimeout(function () {
   menu.style.display = "block";
  }, 300)
  
return
}


function PlayStart(fadeOut, fadeIn){
  fadeOut.forEach(el => {
    el.style.animation = " 0.3s fade-out forwards";
    setTimeout(function () {
    el.style.display = "none";
    },300)
  })
  fadeIn.forEach(item =>{
    item.style.animation = "0.3s fade-in forwards";
    setTimeout(function () {
      item.style.display = "block";
    }, 300)
  })
}

document.getElementById("computer").addEventListener("click",() => {
  let a = document.getElementById("backButton");
  let b = document.getElementById("start_menu");
  let c = document.getElementById("trioPic");
  let d = document.getElementById("logo");
  
  let e = document.getElementById("goBack")
  let f = document.getElementById("scoring");
  let g = document.getElementById("choices");
  const startMenu = [a,b,d];
  const play = [e,f,g];
  PlayStart(startMenu,play);
  setTimeout(()=> {
    c.style.animation = "0.3s fade-out forwards"
  },300)
  c.style.visibility = "hidden";


  
})
document.getElementById("goBack").addEventListener("click", () => {
  let a = document.getElementById("backButton");
  let b = document.getElementById("start_menu");
  let c = document.getElementById("trioPic");
  let d = document.getElementById("logo");
  
  let e = document.getElementById("goBack")
  let f = document.getElementById("scoring");
  let g = document.getElementById("choices");
  const exit = [e,f,g];
  const insert = [a,b,d];
  PlayStart(exit,insert);
  setTimeout(()=> {
    c.style.animation = "0.3s fade-in forwards"
  },300)
  c.style.visibility = "visible";
})


function computerPlay() {
  let choices = ["rock","paper","scissor"];
  let computerAnswer = Math.floor(Math.random() * choices.length);
  return choices[computerAnswer];
}

function GAMESTART(a,b) {
  a.style.animation = "0.8s playLeft forwards";
  b.style.animation = "0.8s playRight forwards";
}

let winScores = 0;
let tieScores = 0;
let lostScores = 0;
let message = document.getElementById("message");
let footer = document.getElementById("footer");


document.getElementById("rock_select").addEventListener("click",() => {
  let a = document.getElementById("goBack");
  let b = document.getElementById("choices");
  
  let c = document.getElementById("computerPlay");
  const exit =  [a,b];
  const insert = [c];
  PlayStart(exit,insert);
  const aiHand = document.getElementById("AIhand");
  const playerHand = document.getElementById("PlayerHand");
  aiHand.setAttribute("src", "pictures/rock.png");
  playerHand.setAttribute("src", "pictures/rock.png");
  setTimeout(()=>{
    let computerHand = computerPlay();
    GAMESTART(aiHand,playerHand);
    setTimeout(()=>{
      footer.style.display = "block";
      footer.style.animation = "0s fade-in forwards"
      if (computerHand === "rock"){
        aiHand.setAttribute("src","pictures/rock.png");
        message.innerText = "TIE";
        message.style.color = "grey";
        playerHand.setAttribute("src", "pictures/rock.png");
        tieScores += 1;
        document.getElementById("tie").innerHTML = tieScores;

      }
      else if(computerHand === "paper"){
        aiHand.setAttribute("src","pictures/paper.png");
        message.innerText = "COMPUTER WIN";
        message.style.color = "red";
       playerHand.setAttribute("src", "pictures/rock.png");
        lostScores += 1;
        document.getElementById("lost").innerHTML = lostScores;
      }
      else if(computerHand === "scissor"){
        aiHand.setAttribute("src","pictures/scissors.png");
        message.innerText = "PLAYER WIN";
        message.style.color = "green";
        playerHand.setAttribute("src", "pictures/rock.png");
        winScores += 1;
        document.getElementById("win").innerHTML = winScores;
      }
      else{
        console.log("error");
      }
    },800)
  },400)
})
document.getElementById("paper_select").addEventListener("click",() => {
  let a = document.getElementById("goBack");
  let b = document.getElementById("choices");
  
  let c = document.getElementById("computerPlay");
  const exit =  [a,b];
  const insert = [c];
  PlayStart(exit,insert);
  const aiHand = document.getElementById("AIhand");
  const playerHand = document.getElementById("PlayerHand");
  aiHand.setAttribute("src", "pictures/rock.png");
  playerHand.setAttribute("src", "pictures/rock.png");
  setTimeout(()=>{
    let computerHand = computerPlay();
    GAMESTART(aiHand,playerHand);
    setTimeout(()=>{
      footer.style.display = "block";
      footer.style.animation = "0s fade-in forwards"
      
      if (computerHand === "paper"){
        aiHand.setAttribute("src","pictures/paper.png");
        message.innerText = "TIE";
        message.style.color = "grey";
        playerHand.setAttribute("src", "pictures/paper.png");
        tieScores += 1;
        document.getElementById("tie").innerHTML = tieScores;

      }
      else if(computerHand === "scissor"){
        aiHand.setAttribute("src","pictures/scissors.png");
        message.innerText = "COMPUTER WIN";
        message.style.color = "red";
       playerHand.setAttribute("src", "pictures/paper.png");
        lostScores += 1;
        document.getElementById("lost").innerHTML = lostScores;
      }
      else if(computerHand === "rock"){
        aiHand.setAttribute("src","pictures/rock.png");
        message.innerText = "PLAYER WIN";
        message.style.color = "green";
        playerHand.setAttribute("src", "pictures/paper.png");
        winScores += 1;
        document.getElementById("win").innerHTML = winScores;
      }
      else{
        console.log("error");
      }
    },800)
  },400)
})

document.getElementById("scissor_select").addEventListener("click",() => {
  let a = document.getElementById("goBack");
  let b = document.getElementById("choices");
  
  let c = document.getElementById("computerPlay");
  const exit =  [a,b];
  const insert = [c];
  PlayStart(exit,insert);
  const aiHand = document.getElementById("AIhand");
  const playerHand = document.getElementById("PlayerHand");
  aiHand.setAttribute("src", "pictures/rock.png");
  playerHand.setAttribute("src", "pictures/rock.png");
  setTimeout(()=>{
    let computerHand = computerPlay();
    GAMESTART(aiHand,playerHand);
    setTimeout(()=>{
      footer.style.display = "block";
      footer.style.animation = "0s fade-in forwards"
      if (computerHand === "scissor"){
        aiHand.setAttribute("src","pictures/scissors.png");
        message.innerText = "TIE";
        message.style.color = "grey";
        playerHand.setAttribute("src", "pictures/scissors.png");
        tieScores += 1;
        document.getElementById("tie").innerHTML = tieScores;

      }
      else if(computerHand === "rock"){
        aiHand.setAttribute("src","pictures/rock.png");
        message.innerText = "COMPUTER WIN";
        message.style.color = "red";
       playerHand.setAttribute("src", "pictures/scissors.png");
        lostScores += 1;
        document.getElementById("lost").innerHTML = lostScores;
      }
      else if(computerHand === "paper"){
        aiHand.setAttribute("src","pictures/paper.png");
        message.innerText = "PLAYER WIN";
        message.style.color = "green";
        playerHand.setAttribute("src", "pictures/scissors.png");
        winScores += 1;
        document.getElementById("win").innerHTML = winScores;
      }
      else{
        console.log("error");
      }
    },800)
  },400)
})


document.getElementById("win").innerText = winScores;
document.getElementById("tie").innerText = tieScores;
document.getElementById("lost").innerText = lostScores; 

document.getElementById("playagain").addEventListener("click", ()=>{
  let a = document.getElementById("goBack");
  let b = document.getElementById("choices");
  
  let c = document.getElementById("computerPlay");
  let d = document.getElementById("footer")
  const exit =  [c,d];
  const insert = [a,b];
  PlayStart(exit,insert);
})