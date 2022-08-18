let wordArray = ['Adachi','Shimamura'];

var wrapped = wrap(words);
console.log(wrapped);

function wrap(words) {
    let a = 0;
    var wordsWrapped = [];
    while (a < words.length) {
        wordsWrapped[a] = `<span id=w${a}>` + words[a] + "</span>"
        a += 1;
    }
    var wrappedJoined = wordsWrapped.join(' ');
    return wrappedJoined;
}

