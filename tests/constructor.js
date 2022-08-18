let HTMLtext = "okay oki hello bats"


function wordArrayConstructor(HTMLtext) {
    let wordArray = HTMLtext.split(" ");
    console.log(wordArray);
    return(wordArray);
}

document.getElementById("paragraph").innerHTML = wordArrayConstructor(HTMLtext)