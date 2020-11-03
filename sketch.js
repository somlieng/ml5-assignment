// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Word2Vec example with p5.js. Using a pre-trained model on common English words.
=== */

let word2Vec;

//Declare all DOM elements
let submitButton;

let adjective1input;
let adj1_value;
let adjective1Result;

let noun1input;
let noun1_value;
let noun1Result;

let disasterinput;
let disaster_value;
let disasterResult;

let verb1input;
let verb1_value;
let verb1Result;

let noun2input;
let noun2_value;
let noun2Result;

let organinput;
let organ_value;
let organResult;

let adjective2input;
let adj2_value;
let adjective2Result;

let noun3input;
let noun3_value;
let noun3Result;

let songLyrics;
let intro;
let verse1;
let verse2;
let verse3;
let verse4;
let outro;

function modelLoaded() {
  select('#status').html('Model Loaded');
}

function setup() {
  noLoop();
//  noCanvas();
    createCanvas(windowWidth,windowHeight);
    
    intro = select('#intro');
    intro.hide();
    
    verse1 = select('#verse1');
    verse1.hide();
    
    verse2 = select('#verse2');
    verse2.hide();
    
    verse3 = select('#verse3');
    verse3.hide();
    
    verse4 = select('#verse4');
    verse4.hide();
    
    outro = select('#outro');
    outro.hide();

  // Create the Word2Vec model with pre-trained file of 5000 words
  word2Vec = ml5.word2vec('wordvecs10000.json', modelLoaded);
    
    //initalize DOM elements
    initializeDOM();
    
    //button press function
    fillLyrics(submitButton);
}

function fillLyrics(button){
    button.mousePressed(bohemianRhapsody);
}

function bohemianRhapsody(){
    showLyrics();
    initializeDOM();
    calcWord(adj1_value,adjective1Result);
    calcWord(noun1_value,noun1Result);
    calcWord(disaster_value,disasterResult);
    calcWord(verb1_value,verb1Result);
    calcWord(noun2_value,noun2Result);
    calcWord(organ_value,organResult);
    calcWord(adj2_value,adjective2Result);
    calcWord(noun3_value,noun3Result);
}

function initializeDOM(){
    //Initialize all DOM elements
    nearWordInput = select('#nearword');
    submitButton = select('#submit');
    nearResults = select('#results');
    
    adjective1input = select('#real');
    adj1_value = adjective1input.value();
    adjective1Result = select('#adj1');
    
    noun1input = select('#life');
    noun1_value = noun1input.value();
    noun1Result = select('#noun1');
    
    disasterinput = select('#landslide');
    disaster_value = disasterinput.value();
    disasterResult = select('#natrual-disaster');
    
    verb1input = select('#escape');
    verb1_value = verb1input.value();
    verb1Result = select('#verb1');
    
    noun2input = select('#reality');
    noun2_value = noun2input.value();
    noun2Result = select('#noun2');
    
    organinput = select('#eyes');
    organ_value = organinput.value();
    organResult = select('#organ');
    
    adjective2input = select('#poor');
    adj2_value = adjective2input.value();
    adjective2Result = select('#adj2');
    
    noun3input = select('#boy');
    noun3_value = noun3input.value();
    noun3Result = select('#noun3');
}

function calcWord(input,output){
    word2Vec.nearest(input, (error, result) => {
      let word = '';
      if (result) {
        let i = floor(random(0,result.length));
        word = result[i].word;
      } else {
        word = '[Try another word]';
      }
      output.html(word);
    });
}

function showLyrics(){
    intro.show();
}
