const word=document.querySelector('.word');
const notification=document.querySelector('.notification');
const playAgain=document.querySelector('#btn');
const wrong=document.querySelector('.wrong');
const wrongLetters=document.querySelector('.wrong-letter');


let wordsArray=['programming','cricket','javascript','project'];

let randomNumber=Math.floor(Math.random()*wordsArray.length);
let randomWord=wordsArray[randomNumber];
console.log(randomNumber);
console.log(randomWord);

displayWords();
function displayWords(){
    let letterArray=randomWord.split('');
    console.log(letterArray);

    letterArray.forEach(function(element){
        console.log('printing')
        word.innerHTML=`<span class="letter">${element}</span>`
    })
}

// for(let i=0;i<randomWord.length;i++){
// console.log('Hii');
// let element=document.createElement('div');
// element.classList.add('letter');
// element.append('.word')
//     // element.innerHTML=`${randomWord[i]}`;
//     element.innerHTML='A';
// }