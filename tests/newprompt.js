let newPromptText = "";
let wordsWanted = 3;

function newPrompt () {
    /* Why declare function with const? As a best practice since JS ES6, it's best to
    declare as many functions as possible with const, because it means the definition
    of the function cannot be changed. If it's intended for the definition of the
    function to change, then of course we should use function, but this is often
    not the case.*/
    const wordBank = ["while", "from", "ok", "when", "never", "know", "violin", "Adachi", "Shimamura", "know", "now", "can", "can't", "short", "long", "tall", "inflate", "university", "school", "work", "from", "for", "sing", "song", "new", "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line"];
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
        newPromptText = newPromptText + currentWord + " ";
        words += 1;
    }
    newPromptText = newPromptText.slice(0, newPromptText.length-1);
    console.log(newPromptText);

    console.log("prompt refreshed / made.")
    return(newPromptText);
}

let HTMLtext = newPrompt();

document.getElementById('paragraph').innerHTML = HTMLtext + HTMLtext.length;