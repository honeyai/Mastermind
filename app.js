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
  
//create a button "check answer". When it's clicked it'll compare to see if the colors are in the right divs/ in the right order/ or not at all.

//for in of the check answer and code if the index of both circles have the same color then it will be a green peg. 

//if the color is found in the area of the code but not in the same index it will be a yellow peg.checkAnswer

//none of the above is empty.

const doesItMatch = (element, code) => {
  if(element.css("background-color") === code.css("background-color")){
    alert("it matches")
  } else {
    console.log("This is the element,",element.css("background-color") ,"\nThis is the code,", code.css("background-color") )
  }
}

let button = $(".checkAnswer");

button.click(function(){
  doesItMatch(trigger1, circle[0])
});


codeMaker();