var spellings = [["achieve", "acheive", "acheeve", "achyve"], ["business","buissines","businnes","buisinness"], ["successful","sucksessful","sucsessful","succesful"], ["beautiful","beeutiful", "beatiful","beautful"], ["believe", "beleve","beleive","belive"], ["siege", "seige", "seege","sieje"],["cycling", "cycwling", "cyculing", "sycling"],["dyslexia","dislexia","dylecsia","dislecsia"], ["tomorrow", "tommorow", "tommorrow", "tomorow"], ["remember","remmember","rember","remeber"]];

function getRandomSpellings(){

var RandomSpelling = getRandomSpelling();

var RandomOrder = RandomSpelling.sort(function(a,b){return 0.5 - Math.random()});
document.getElementById("button1").textContent = RandomOrder[0];
document.getElementById("button2").textContent = RandomOrder[1];
document.getElementById("button3").textContent = RandomOrder[2];
document.getElementById("button4").textContent = RandomOrder[3];

};

function checkAnswer1(){
  var answer = document.getElementById("button1").textContent.toString();

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



var getRandomSpelling = function () {
    return spellings[Math.floor(Math.random() * spellings.length )];
};
