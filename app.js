let color = ["#F25835", "#0477BF", "#F2C641", "#04BF68"];

let first = $(".theCode .first");
let second = $(".theCode .second");
let third = $(".theCode .third");
let fourth = $(".theCode .fourth");

let circle = [first, second, third, fourth];

let codeCircle = [];

let circleColors = [];

let totalRounds = 12; 

let roundCircle = [".first", ".second", ".third", ".fourth"];
let roundIncrement = 1;
    
let round = `.round${roundIncrement}`;


let check1 = $(`${round} .feedBack .answerCircle1`);
let check2 = $(`${round} .feedBack .answerCircle2`);
let check3 = $(`${round} .feedBack .answerCircle3`);
let check4 = $(`${round} .feedBack .answerCircle4`);

let feedBack = [check1, check2, check3, check4];
let fbColor =  ["#1DB39E","#FF8D5C"]

let trigger1;
let trigger2;
let trigger3;
let trigger4;

let button = $(".checkAnswer");

const randIndex = array => Math.floor(Math.random() * array.length);

const codeMaker = () => { 
  for (element in circle){
    //Assigning random colors to the code circles  
    circle[element].css("background-color", color[randIndex(color)]);
    //Creating an array of the chosen colors to compare later.
    circle.forEach(element => circleColors.push(element.css("background-color")))
  }
}

trigger1 = $(`${round} ${roundCircle[0]}`);
trigger2 = $(`${round} ${roundCircle[1]}`);
trigger3 = $(`${round} ${roundCircle[2]}`);
trigger4 = $(`${round} ${roundCircle[3]}`);

codeMaker();

const doesItMatch = (element, code) => {
  if(element.css("background-color") === code.css("background-color")){
    let localIndex = randIndex(feedBack);
    let grabbingDiv = feedBack[localIndex];
    feedBack.splice(localIndex,1);
    $(grabbingDiv).css("background-color", fbColor[0]);
    console.log(feedBack[localIndex])
  } else if(circleColors.includes(element.css("background-color"))){ 
    let localIndex = randIndex(feedBack);
    let grabbingDiv = feedBack[localIndex];
    feedBack.splice(localIndex,1);
    $(grabbingDiv).css("background-color", fbColor[1]);
    console.log("match, but not exact");
    console.log(feedBack[localIndex])
  }
}



button.click(function(){
  doesItMatch(trigger1, circle[0])
  doesItMatch(trigger2, circle[1])
  doesItMatch(trigger3, circle[2])
  doesItMatch(trigger4, circle[3])

  roundIncrement++;

  round = `.round${roundIncrement}`;

  console.log("this is round", round);

  trigger1 = $(`${round} ${roundCircle[0]}`);
  trigger2 = $(`${round} ${roundCircle[1]}`);
  trigger3 = $(`${round} ${roundCircle[2]}`);
  trigger4 = $(`${round} ${roundCircle[3]}`);

  console.log("this is trigger1", `${round} ${roundCircle[0]}`)
});
  

 
let next1 = 0;
$(trigger1).click(function(){
  if (next1 < color.length-1){
    trigger1.css("background-color", color[next1]);
    next1++;
  } else {
    trigger1.css("background-color", color[next1]);
    next1 = 0;
  }
})

let next2 = 0;
$(trigger2).click(function(){
  if (next2 < color.length-1){
    trigger2.css("background-color", color[next2]);
    next2++;
  } else {
    trigger2.css("background-color", color[next2]);
    next2 = 0;
  }
})

let next3 = 0;
$(trigger3).click(function(){
  if (next3 < color.length-1){
    trigger3.css("background-color", color[next3]);
    next3++;
    console.log("this is next,", next3)
  } else {
    trigger3.css("background-color", color[next3]);
    next3 = 0;
    console.log("this is next,", next3)
  }
})

let next4 = 0;
$(trigger4).click(function(){
  if (next4 < color.length-1){
    trigger4.css("background-color", color[next4]);
    next4++;
  } else {
    trigger4.css("background-color", color[next4]);
    next4 = 0;
  }
})