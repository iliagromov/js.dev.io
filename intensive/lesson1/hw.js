/*global Symbol */

function cleanStr(str){
    return str.trim().replace(/  +/g, ' ');
}

function wordsCount(str){
    return cleanStr(str).split(' ').length;
}

function getWordsIterator(str){
    // ex.1
    // return cleanStr(str).split(' ');

    //ex.2
    return {
        words: cleanStr(str).split(' '),
        [Symbol.iterator](){
            let i = 0;
            return {
                next: () => {
                    if(i < this.words.length){
                        return {
                            done: false,
                            value: this.words[i++]
                        }
                    }
                    else {
                        return{
                            done: true
                        }
                    }
                }
            }
        }
    }
}

function* getWordsGenerator(str){
    let words = cleanStr(str).split(' ');
    for(let i = 0; i < words.length; i++ ){
        yield words[i];
    }

}

function* getWords(str){
    let text = cleanStr(str) + ' ';
    let start = 0;
    let current = text.indexOf(' ', start);
    while(current !== -1){
        yield text.substr(start, current - start);
        start = current + 1;
        current = text.indexOf(' ', start); 
    }
}

export {wordsCount, getWordsGenerator, getWordsIterator, getWords}