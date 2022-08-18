var currentWordIndex;
var wordsWanted = 50;//total number of words that the user wants to go through
var correctWords;
var wordArray;
var wordArrayForHTML;
var currentWordIsDone;
var startTime, endTime;

const inputBoxElement = document.getElementById('inputBox');
// Makes prompt when first loaded

let HTMLtext;

window.onload = function() {
    resetPrompt();
    inputBoxElement.focus();
}

document.getElementById("Reset").onclick = function() { // WHEN ELEMENT WITH ID "Reset" IS CLICKED:CHANGES LABEL ABOVE TEXTBOX TO "Welcome, <username>"
    resetPrompt();
}

// Add event listener for escape key
document.addEventListener('keydown', (event) => {
    var keyCode = event.code;
    if (keyCode == "Escape") {
        resetPrompt();
    }
}, false);

function resetPrompt() { // WHEN ELEMENT WITH ID "Reset" IS CLICKED:CHANGES LABEL ABOVE TEXTBOX TO "Welcome, <username>"
    wordArray = newPrompt();
    wordArrayForHTML = wrapper(wordArray);
    HTMLtext = wordArrayForHTML.join(" ");
    document.getElementById('paragraph1').innerHTML = HTMLtext;
    correctWords = 0;
    currentWordIndex = 0;
    inputBoxElement.style.backgroundColor = 'white';
    inputBoxElement.value = '';
    inputBoxElement.addEventListener('input', (event) => { // Wait for first input
        startTime = new Date();
    }, {once: true})

    // highlight first word
    document.getElementById('w0').style.color = "orange";
}

function newPrompt() {
    /* Why declare function with const? As a best practice since JS ES6, it's best to
    declare as many functions as possible with const, because it means the definition
    of the function cannot be changed. If it's intended for the definition of the
    function to change, then of course we should use function, but this is often
    not the case.*/
    const wordBank = ["Shimamura", "Adachi", "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line"];
    let newPromptArray = [];
    let words = 0;
    let rand = 0;
    let lastRand = 0;
    while (words < wordsWanted) {
        rand = Math.floor(Math.random() * wordBank.length);
        while (rand == lastRand) {
            rand = Math.floor(Math.random() * wordBank.length);
        }//Avoid duplicate words
        lastRand = rand;
        currentWord = wordBank[rand];
        newPromptArray[words] = currentWord;
        words += 1;
    }
    //slice off the last space
    return(newPromptArray);
}

// Add event listener for input box
//the inside of the event listener brackets will be called everytime it detects input.
inputBoxElement.addEventListener('input', (event) => {// CAUTION CURSED CODE INSIDE
    var wordsMatch;
    var textInside = inputBoxElement.value;

    if (currentWordIndex < wordArray.length - 1) {
        currentSupposedWord = wordArray[currentWordIndex];
        if (textInside[textInside.length - 1] != " ") {
            //clear inputbox coloring
            inputBoxElement.style.backgroundColor = 'white';
            if (textInside.length <= currentSupposedWord.length) {
                currentWordIsDone = false;
                switch (checkIfRight(textInside, currentSupposedWord)) {
                    case true:
                        if (textInside.length == currentSupposedWord.length) {
                            currentWordIsDone = true;
                        }
                        break;
                    case false:
                        inputBoxElement.style.backgroundColor = ('pink');
                }
            } else {
                inputBoxElement.style.backgroundColor = ('pink');
            }
        } else {//IF SPACE IS PRESSED
            if (textInside.length == currentSupposedWord.length + 1 && currentWordIsDone == true) {
                correctWords += 1;
                // set next word to orange, set completed word accordingly
                console.log("highlight " +`w${currentWordIndex + 1}`);
                document.getElementById(`w${currentWordIndex + 1}`).style.color = "orange";
                document.getElementById(`w${currentWordIndex}`).style.color = "green";
            } else {
                document.getElementById(`w${currentWordIndex + 1}`).style.color = "orange";
                document.getElementById(`w${currentWordIndex}`).style.color = "red";
            }
            currentWordIndex += 1;
            clearInputBox();
        }
    } else if (currentWordIndex == wordArray.length - 1) {
        currentSupposedWord = wordArray[currentWordIndex];
        if (textInside[textInside.length - 1] != " ") {
            //clear inputbox coloring
            inputBoxElement.style.backgroundColor = 'white';
            if (textInside.length <= currentSupposedWord.length) {
                currentWordIsDone = false;
                switch (checkIfRight(textInside, currentSupposedWord)) {
                    case true:
                        if (textInside.length == currentSupposedWord.length) {
                            correctWords += 1;

                            document.getElementById(`w${currentWordIndex}`).style.color = "green";

                            endTime = new Date();
                            var timeDiff = endTime - startTime;
                            timeDiff = timeDiff / 1000;
                            var wordsPerMinute = correctWords / timeDiff * 60;
                            var wpmRounded = Math.round(wordsPerMinute);

                            var accuracy = (correctWords / wordsWanted) * 100
                            
                            document.getElementById('header').innerHTML = correctWords + " correct " + accuracy + "% accuracy " + wpmRounded + " WPM"
                            console.log("done iterating")
                        }
                        break;
                    case false:
                        inputBoxElement.style.backgroundColor = ('pink');
                        break;
                }
            } else {
                inputBoxElement.style.backgroundColor = ('pink');
            }



        } else {
            clearInputBox();
        }
    }

    
}, false);

function refreshPrompt() {
    //
}

function checkIfRight(textInside, currentSupposedWord) {
    //TODO
    var length;
    length = textInside.length;
    return textInside == currentSupposedWord.slice(0, length);
}

function clearInputBox() {
    inputBoxElement.value = '';
    inputBoxElement.style.backgroundColor = 'white'
}

function wordArrayConstructor(HTMLtext) {
    let wordArray = HTMLtext.split(" ");
    return(wordArray);
}

function wrapper(wordArray) {
    let a = 0;
    var wordsWrapped = [];
    while (a < wordArray.length) {
        wordsWrapped[a] = `<span id=w${a}>` + wordArray[a] + "</span>"
        a += 1;
    }
    console.log(wordsWrapped)
    return wordsWrapped;
}

