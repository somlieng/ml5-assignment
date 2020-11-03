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
let noun1Result;
let noun1_value;

let noun2input;
let noun2Result;
let noun2_value;

let songLyrics;

function modelLoaded() {
  select('#status').html('Model Loaded');
}

function setup() {
  noLoop();
//  noCanvas();
    createCanvas(windowWidth,windowHeight);
    songLyrics = select('#lyrics');
    songLyrics.hide();

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
    calcWord(noun2_value,noun2Result);
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
    
    noun2input = select('#landslide');
    noun2_value = noun2input.value();
    noun2Result = select('#natrual-disaster');
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
    songLyrics.show();
}
