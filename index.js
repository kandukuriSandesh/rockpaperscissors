let player1dis = document.getElementsByClassName("display1")[0];
let player2dis = document.getElementsByClassName("display2")[0];
let resultOutput = document.getElementsByClassName("middle")[0];
let btn1 = document.getElementsByClassName("btn1")[0];
let btn2 = document.getElementsByClassName("btn2")[0];
let points1dis = document.getElementsByClassName("points1dis")[0];
let points2dis = document.getElementsByClassName("points2dis")[0];
let points1 = document.getElementsByClassName("points1")[0];
let points2 = document.getElementsByClassName("points2")[0];
let num = 0;
let result1 = "";
let result2 = "";
let Arr = ["Rock","Paper","Scissor"];
let counter = 3;
let timerdis = document.getElementsByClassName("timer")[0];
let key = ""


function player1result(){
    let number = Math.floor(Math.random()*3 );
     result1 = Arr[number];
    player1dis.textContent = result1;
}

function player2result(){
  
    if(result1 === ""){
        alert("Player 1 has to throw his Hand First");
        resultOutput.textContent = "Player 1 didn't use his Hand.";
        return
    }
    let number = Math.floor(Math.random()*3 );
     result2 = Arr[number];
    player2dis.textContent = result2;
  
    analysis();
    timerfunc();
}
function analysis(){
    if(result1 === result2){
        resultOutput.textContent = "Viola!, Its a Draw";
        resultOutput.style.color="green";
        resultOutput.style.fontWeight = "bold";

    }
    else if (result1 === "Rock" && result2 === "Paper") {
        player2increment()

    } 
    else if(result1 === "Rock" && result2 === "Scissor") {
        player1increment()
    }
    else if(result1 === "Paper" && result2 === "Rock"){
        player1increment()
    }
    else if(result1 === "Paper" && result2 === "Scissor"){
        player2increment()
    }
    else if(result1 === "Scissor" && result2 === "Rock"){
        player2increment()
    }
    else if(result1 === "Scissor" && result2 === "Paper"){
        player1increment()
    }
}

function timer(){
    timerdis.textContent = counter;
    counter--;
    
    if(counter<0){
      timerdis.textContent = "";
      counter=3;
      clearInterval(key);
      player1dis.textContent="";
      player2dis.textContent="";
      result1 = "";
      resultOutput.textContent="Try Once More";
      btn2.disabled = false;
      btn1.disabled = false;
      resultOutput.style.color="rgb(104, 104, 104)";
      resultOutput.style.fontWeight = "normal";
      points1.style.border = "5px solid rgb(121, 119, 119)";
      points2.style.border = "5px solid rgb(121, 119, 119)";

      
      if(points1dis.textContent == 5){
        alert("Hurray! Player 1 has won the Game");
        reset();
        resultOutput.textContent = "Lets Start The Game";
 
     }
     else if( points2dis.textContent == 5){
        alert("Hurray! Player 2 has won the Game");
        reset();
        resultOutput.textContent = "Lets Start The Game";
     }
    }
    else{
        timerdis.textContent = counter;
    }
}

function player1increment(){
    resultOutput.textContent = "Player 1 Won";
    resultOutput.style.color="rgb(104, 104, 104)";
    resultOutput.style.fontWeight = "bold";
    points1dis.textContent = parseInt(points1dis.textContent) + 1 
    points1.style.border = "5px solid green";
}

function player2increment(){
    resultOutput.textContent = "Player 2 Won";
    resultOutput.style.color="rgb(190, 160, 190)";
     resultOutput.style.fontWeight = "bold";
    points2dis.textContent = parseInt(points2dis.textContent) + 1
    points2.style.border = "5px solid green";
}

function timerfunc(){
    key = setInterval(timer,1000);
    btn2.disabled = true;
    btn1.disabled = true;

}

function reset(){
    points1dis.textContent = 0;
    points2dis.textContent = 0;
}

function resultstyle(){
    resultOutput.style.color="red";
    resultOutput.style.fontWeight = "bold";
}
