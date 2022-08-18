var a = 1;
var b = a -1;
let lastWordCorrect;

let lastWord = document.getElementById('s'+b);
let currentWord = document.getElementById('s'+a);

document.addEventListener('keydown', (event) => {
    var name = event.key;

    changecolor(currentWord);

    if (a != 0) {
        changeAccording(lastWord, name);
    }
    console.log(name);
    a += 1;
    console.log("now a is " + a)
})

function changeAccording(lastWord, name) {
    if (name == "w") {
        lastWordCorrect = false
    } else if (name == "r") {
        lastWordCorrect = true
    }

    switch (lastWordCorrect == true) {
        case true:
            lastWord.style.color = "green";
            break;
        case false:
            lastWord.style.color = "red";
            break;
    } 
}

function changecolor(currentWord) {
    console.log("currentWord is" + currentWord);
    currentWord.style.color = "grey";
    console.log("color " + a);
}
