let word=document.querySelector('.word');
const notification=document.querySelector('.notification');
const playAgain=document.querySelector('#btn');
const wrong=document.querySelector('.wrong');
const wrongLetters=document.querySelector('.wrong-letter');
const popup=document.querySelector('.popup-container');
const message=document.querySelector('.message');
const figureParts=document.querySelectorAll('.figure-part');

let wordsArray=['programming','cricket','javascript','project','frontend','tech'];
let typedLettersArray=[];
let indexArray=[];
let wrongCount=1;
let rightCount=0;
let wrongLettersArray=[];

let letterArray=letterArrayReturn();

displayWords();

// Functions
function letterArrayReturn(){
    let randomNumber=Math.floor(Math.random()*wordsArray.length);
    let randomWord=wordsArray[randomNumber];
    return randomWord.split('');
}

function displayWords(){
    word.innerHTML=``;
    letterArray.forEach(function(element){
        word.innerHTML+=`<span class="letter"></span>`
    });
}

function showNotification(e){
    if(e.keyCode>=65 && e.keyCode<=90){
        notification.classList.add('show');
        setTimeout(function(){
            notification.classList.remove('show');
        },2000)
    }
}

function lostGameCheck(){
    if(wrongCount===7){
        popup.style.display='flex';
        message.innerText='So Sad! You Lost :(';
    }
}

function wonGameCheck(){
    if(rightCount===letterArray.length){
        popup.style.display='flex';
        message.innerText='Yayy! You Won :)';
    }
}

// Event Listeners
playAgain.addEventListener('click',function(){
    // Reseting everything
    popup.style.display='none';
    wrong.innerText='';
    wrongLetters.innerText='';
    letterArray=letterArrayReturn();
    console.log(letterArray);
    displayWords();
    typedLettersArray=[];
    indexArray=[];
    wrongCount=0;
    rightCount=0;
    figureParts.forEach(function(part,index){
        part.style.display="none";
    })
});

document.addEventListener('keydown',function(e){
    console.log("executing This");
    if(e.keyCode>=65 && e.keyCode<=90 && !letterArray.includes(e.key) && !wrongLettersArray.includes(e.key)){
        wrongLettersArray.push(e.key);
    }
        figureParts.forEach(function(part,index){
            let errors=wrongLettersArray.length;

            if(index<errors){
                part.style.display="block";
            }
        })
});

document.addEventListener('keydown',function(e){
    rightCount=0;
    console.log('Reset');
    if(!letterArray.includes(e.key) && wrongCount<7 && !typedLettersArray.includes(e.key) && (e.keyCode>=65 && e.keyCode<=90)){
        wrong.innerText='Wrong';
        wrongLetters.innerHTML+=`${e.key}`+' ';
        wrongCount++;
        lostGameCheck();
    }

    if(typedLettersArray.includes(e.key)){
        showNotification(e);
    } else {
        word.innerHTML='';
        console.log('Key: ',e.key);
        console.log(letterArray.length);
        for(let i=0;i<letterArray.length;i++){
            if(letterArray[i]===(e.key)){
                indexArray.push(i);
                console.log('Index Array:', indexArray);
            }
        }
        typedLettersArray.push(e.key);
        letterArray.forEach(function(element,index){
        if(indexArray.includes(index)){
            word.innerHTML+=`<span class="letter">${element}</span>`
            rightCount++;
            console.log('rightCount: ',rightCount);
        } else {
            word.innerHTML+=`<span class="letter"></span>`
        }
        wonGameCheck();
    });             
}
});