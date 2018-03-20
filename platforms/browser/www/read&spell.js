var words = [ "program", "application", "keyboard", "javascript", "gaming", "network", "absence","accidentally","accommodate","accumulate","achievement","acquaintance","acquire","acquitted","advice","advise","amateur","among","analysis","analyze","annual","apartment","apparatus","apparent","appearance","arctic","arguing","argument","arithmetic","ascend","athletic","attendance","balance","battalion","beginning","belief","believe","beneficial","benefited","boundaries","Britain","business","calendar","candidate","category","cemetery","changeable","changing","choose","chose","coming","commission","committee","comparative","compelled","conceivable","conferred","conscience","conscientious","conscious","control","controversial","controversy","criticize","deferred","definitely\tdefinition","describe","description","desperate","dictionary","dining","disappearance","disappoint","disastrous","discipline","dissatisfied","dormitory","effect","eighth","eligible","eliminate","embarrass","eminent","encouragement","encouraging","environment","equipped","especially","exaggerate","excellence","exhilarate","existence","existent","experience","explanation","familiar","fascinate","February","fiery","foreign","formerly","forty","fourth","frantically","generally","government","grammar","grandeur","grievous","height","heroes","hindrance","hoping","humorous","hypocrisy","hypocrite","immediately","incidentally","incredible","independence","inevitable","intellectual","intelligence","interesting","irresistible\tknowledge","laboratory","laid","led","lightning","loneliness","lose","losing","maintenance","maneuver","manufacture","marriage","mathematics","maybe","mere","miniature","mischievous","mysterious","necessary","Negroes","ninety","noticeable","occasionally","occurred","occurrence","omitted","opinion","opportunity","optimistic","paid","parallel","paralysis","paralyze","particular","pastime","performance","permissible","perseverance","personal","personnel","perspiration","physical","picnicking","possession","possibility","possible","practically","precede","precedence","preference","preferred","prejudice","preparation","prevalent","principal","principle","privilege","probably","procedure","proceed\tprofession","professor","prominent","pronunciation","pursue","quantity","quizzes","recede","receive","receiving","recommend","reference","referring","repetition","restaurant","rhyme","rhythm","ridiculous","sacrifice","sacrilegious","salary","schedule","seize","sense","separate","separation","sergeant","severely","shining","similar","sincerely","sophomore","specifically","specimen","statue","studying","succeed","succession","surprise","technique","temperamental","tendency","tragedy","transferring","tries","truly","tyranny","unanimous","undoubtedly","unnecessary","until","usually","village","villain","weather","weird","whether","woman","women","writing"];

showWord = function() { var word = getRandomWord();

    console.log(word);

    document.getElementById("word").textContent = word;}

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var input = document.querySelector('#clear');
var textarea = document.querySelector('#answer');

input.addEventListener('click', function () {
    textarea.value = '';
    }, false);

checkAnswer = function() {

  var answer = document.getElementById('answer').value.toString().trim().toLowerCase();
  var word = document.getElementById("word").textContent.toString().trim().toLowerCase();
  if (answer != word) { document.getElementById("answercorrect").textContent = "Incorrect, please try again.";

  } else {
    showWord();
    document.getElementById("answercorrect").textContent = "Good job, here's another.";


  }
 };
