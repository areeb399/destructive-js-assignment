function wordCount(text){
    let words = text.split(' ');

    let wordCounts = new Map();

    for(let i=0; i<words.length ; i++){
        let word = words[i].toLowerCase();

        word = word.replace(/[^\w\s]|_/g,'');

        if(wordCounts.has(word)){
            wordCounts.set(word, wordCounts.get(word)+1);
        }
        else{
            wordCounts.set(word, 1);
        }
    }
    return wordCounts;
}

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed nisl velit. Sed in suscipit elit, non lobortis velit. Pellentesque efficitur felis vel magna semper, ac semper nisl aliquet.";

let result = wordCount(text);
console.log(result);
