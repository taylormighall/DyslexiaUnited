var words =  ["absence","accidentally","accommodate","accumulate","achievement","acquaintance","acquire","acquitted","amateur","among","analysis","analyze","annual","apartment","apparatus","apparent","appearance","arctic","arguing","argument","arithmetic","ascend","athletic","attendance","balance","battalion","beginning","belief","believe","beneficial","benefited","boundaries","Britain","business","calendar","candidate","category","cemetery","changeable","changing","choose","chose","colonel","coming","commission","committee","comparative","compelled","conceivable","conferred","conscience","conscientious","conscious","control","controversial","controversy","criticize","deferred","describe","description","desperate","dictionary","disappearance","disappoint","disastrous","discipline","dissatisfied","dormitory","effect","eighth","eligible","eliminate","embarrass","eminent","encouragement","encouraging","environment","equipped","especially","exaggerate","excellence","exhilarate","existence","existent","experience","explanation","familiar","fascinate","foreign","formerly","forty","fourth","frantically","generally","government","grammar","grandeur","grievous","height","heroes","hindrance","hoping","humorous","hypocrisy","hypocrite","immediately","incidentally","incredible","independence","inevitable","intellectual","intelligence","interesting","irresistible\tknowledge","laboratory","laid","led","lightning","loneliness","lose","losing","maintenance","maneuver","manufacture","marriage","mathematics","miniature","mischievous","mysterious","necessary","ninety","noticeable","occasionally","occurred","occurrence","omitted","opinion","opportunity","optimistic","paid","parallel","paralysis","paralyze","specific","particular","pastime","performance","permissible","perseverance","personal","personnel","perspiration","picnicking","practically","precede","precedence","preference","preferred","prejudice","preparation","prevalent","principal","principle","privilege","probably","procedure","professor","prominent","pronunciation","pursue","quantity","quizzes","recede","receiving","recommend","repetition","restaurant","rhyme","rhythm","ridiculous","rural","sacrifice","sacrilegious","schedule","seize","sense","sergeant","severely","shining","similar","sincerely","sophomore","specifically","specimen","statue","studying","succeed","succession","surprise","technique","temperamental","tendency","tragedy","transferring","tyranny","unanimous","undoubtedly","unnecessary","until","usually","village","villain","weather","whether","bibliography","rivalry","Shrek","emancipation","outrageous","squirrel"];
// array of all the words that can be shown
showWord = function() { var word = getRandomWord(); // generates a rondom word from the list above

console.log(word);

document.getElementById("word").textContent = word;}

var getRandomWord = function () { //This function uses the Math.random function to select a random place in the "words" Array
    return words[Math.floor(Math.random() * words.length)];
};

var input = document.querySelector('#clear'); //This next section sets up an event listener that clears the textarea whenver an answer is submitted
var textarea = document.querySelector('#answer');

input.addEventListener('click', function () {
    textarea.value = '';
    }, false);

checkAnswer = function() { //This function checks the answer when the button is pressed. It does this simply by comparing the Strings taken in the "word" div and the "answer" text area.

  var answer = document.getElementById('answer').value.toString().trim().toLowerCase(); //These two lines get the strings from the html, and clean them so they can be compared
  var word = document.getElementById("word").textContent.toString().trim().toLowerCase();
  if (answer != word) { document.getElementById("answercorrectpp").textContent = "Incorrect, please try again"; //If the answer is correct the if statment comes through as false, sets the
  document.getElementById("answercorrectpp").style.color = "#DD4132";                                           // "answercorrect" text as the positive option and runs the showWord() function,
} else {                                                                                                     // generating a different word and starting the process over again. If incorrect the
    showWord();                                                                                              // negative option is displayed and the user is given another oppertunity to spell the word
    document.getElementById("answercorrectpp").textContent = "Good job, here's another";
document.getElementById("answercorrectpp").style.color = "#7FBD32";

  }
 };
