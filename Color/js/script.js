
// var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// recognition.continuous = true;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// var colors = [ 'yellow' , 'blue' , 'green' ];


// // Start funtion when talking

// recognition.onresult = function(event) {
//     let result = "";

//     for (let i = event.resultIndex; i < event.results.length; i++) {
//         result += event.results[i][0].transcript;
//         console.log(result);
//         if(colors.includes(result)){
//             document.body.style.backgroundColor = result;
//         }
//         }

// }

// // Enable SpeechRecognition on click body
// document.body.onclick = function() {
//     recognition.start();
// }


// get word

var input = document.querySelector("input");
var button = document.querySelector("button");


button.addEventListener("click", rhyme);

function rhyme(){
    if(input.value.slice(-2) == "en"){
        var str = input.value;
        var newStr = str.substring(0, str.length - 2);
        console.log(endVowel(newStr) + newStr.split(endVowel(newStr))[1]+ "en");
 }
    else{
        console.log(input.value.split(endVowel(input.value)).pop());
    }
}

function endVowel(x){
    const match = x.match(/[aeiou](?!.*[aeiou])/i);
    return match ? match[0] : 'No match';
 }
 


// find word last a/e/i/ie/ee/aa/uu/eu/aa/oo/o/

// get all letters after aa

// Search if words contain letters  in txt file


$.getJSON("taal.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});


// const fs = require("fs");




// fs.readFile(__dirname + "taal.txt", function (err, data) {
//     if (err) throw err;

//     if(data.endsWith('lopen')){
//         console.log(data);
     
//     }
//   });