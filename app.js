let color = ["#F25835", "#0477BF", "#F2C641", "#04BF68"];

let first = $(".theCode .first");
let second = $(".theCode .second");
let third = $(".theCode .third");
let fourth = $(".theCode .fourth");

let circle = [first, second, third, fourth];

const randIndex = array => Math.floor(Math.random() * array.length);

const codeMaker = () => { 
  for (element in circle){
    circle[element].css("background-color", color[randIndex(color)]);
  }
}


//make this increment thru the rounds

let totalRounds = 12; 

let roundCircle = [".first", ".second", ".third", ".fourth"];
let roundIncrement = 1;
    
let round = `.round${roundIncrement}`;

// while (totalRounds > 12) {
//   for (index in roundCircle){

//   }
    

    
let trigger1 = $(`${round} ${roundCircle[0]}`);
let trigger2 = $(`${round} ${roundCircle[1]}`);
let trigger3 = $(`${round} ${roundCircle[2]}`);
let trigger4 = $(`${round} ${roundCircle[3]}`);




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
  
// }



codeMaker();