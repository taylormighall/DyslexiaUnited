var spellings = [["achieve", "acheive", "acheeve", "achyve"], ["business","buissines","businnes","buisinness"], ["successful","sucksessful","sucsessful","succesful"], ["beautiful","beeutiful", "beatiful","beautful"], ["believe", "beleve","beleive","belive"], ["siege", "seige", "seege","sieje"],["cycling", "cycwling", "cyculing", "sycling"],["dyslexia","dislexia","dylecsia","dislecsia"], ["tomorrow", "tommorow", "tommorrow", "tomorow"], ["remember","remmember","rember","remeber"]];
// Above is the 2 dimensional Array containing the sets of correct and incorrectly spelt words
function getRandomSpellings(){ // This function calls the getRandomSpelling spelling function to get a random list of 4 words. It then mixes them up and assigns them each to a button.

var RandomSpelling = getRandomSpelling();

var RandomOrder = RandomSpelling.sort(function(a,b){return 0.5 - Math.random()});
document.getElementById("button1").textContent = RandomOrder[0];
document.getElementById("button2").textContent = RandomOrder[1];
document.getElementById("button3").textContent = RandomOrder[2];
document.getElementById("button4").textContent = RandomOrder[3];

};

var getRandomSpelling = function () { //This function uses the Math.random function to select a 2nd level array
    return spellings[Math.floor(Math.random() * spellings.length )];
};

function checkAnswer1(){ //The checkAnswer functions correspond to a button. They take the word on the pressed button and compare it to the list of correct spellings.
  var answer = document.getElementById("button1").textContent.toString(); // If correct it generates another set of words aand displays the "good job" text.
                                                                          // If incorrect it displays the "incorrect" text and lets the user choose again.
  if  (answer == "achieve" || answer == "business" || answer == "successful"|| answer == "beautiful"||answer == "believe"|| answer == "siege" || answer == "cycling" || answer == "remember" || answer == "tomorrow" || answer == "dyslexia") { document.getElementById("answercorrect").textContent = "Incorrect, please try again.";
  getRandomSpellings();
  document.getElementById("answercorrect").textContent = "Good job, here's another";
  document.getElementById("answercorrect").style.color = "#7FBD32";
  } else {

     document.getElementById("answercorrect").textContent = "Incorrect, please try again";
     document.getElementById("answercorrect").style.color = "#DD4132";
  }
};

function checkAnswer2(){
  var answer = document.getElementById("button2").textContent.toString();
  if  (answer == "achieve" || answer == "business" || answer == "successful"|| answer == "beautiful"||answer == "believe"|| answer == "siege"|| answer == "cycling" || answer == "remember" || answer == "tomorrow" || answer == "dyslexia") { document.getElementById("answercorrect").textContent = "Incorrect, please try again.";
  getRandomSpellings();
  document.getElementById("answercorrect").textContent = "Good job, here's another";
  document.getElementById("answercorrect").style.color = "#7FBD32";
  } else {
 document.getElementById("answercorrect").textContent = "Incorrect, please try again";
 document.getElementById("answercorrect").style.color = "#DD4132";

  }
};

function checkAnswer3(){
  var answer = document.getElementById("button3").textContent.toString();
  if (answer == "achieve" || answer == "business" || answer == "successful"|| answer == "beautiful"||answer == "believe"|| answer == "siege"|| answer == "cycling" || answer == "remember" || answer == "tomorrow" || answer == "dyslexia") { document.getElementById("answercorrect").textContent = "Incorrect, please try again.";
  getRandomSpellings();
  document.getElementById("answercorrect").textContent = "Good job, here's another";
  document.getElementById("answercorrect").style.color = "#7FBD32";
  } else {
 document.getElementById("answercorrect").textContent = "Incorrect, please try again";
 document.getElementById("answercorrect").style.color = "#DD4132";

  }
};

function checkAnswer4(){
  var answer = document.getElementById("button4").textContent.toString();
  if  (answer == "achieve" || answer == "business" || answer == "successful"|| answer == "beautiful"||answer == "believe"|| answer == "siege"|| answer == "cycling" || answer == "remember" || answer == "tomorrow" || answer == "dyslexia") {
  getRandomSpellings();
  document.getElementById("answercorrect").textContent = "Good job, here's another";
  document.getElementById("answercorrect").style.color = "#7FBD32";
  } else {
 document.getElementById("answercorrect").textContent = "Incorrect, please try again";
 document.getElementById("answercorrect").style.color = "#DD4132";

  }
};
