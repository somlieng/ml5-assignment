// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Word2Vec example with p5.js. Using a pre-trained model on common English words.
=== */

let word2Vec;

function modelLoaded() {
  select('#status').html('Model Loaded');
}

function setup() {
  noLoop();
  noCanvas();

  // Create the Word2Vec model with pre-trained file of 5000 words
  word2Vec = ml5.word2vec('wordvecs10000.json', modelLoaded);

  // Select all the DOM elements
    let nearWordInput = select('#nearword');
    let nearButton = select('#submit');
    let nearResults = select('#results');
    let adjective1input = select('#real');
    let adjective1Result = select('#adj1');
    let noun1input = select('#life');
    let noun1Result = select('#noun1');

  // Finding the nearest words
  nearButton.mousePressed(() => {
    let word = nearWordInput.value();
    let adj1_value = adjective1input.value();
    let noun1_value = noun1input.value();
    word2Vec.nearest(word, (error, result) => {
      let output = '';
      if (result) {
        for (let i = 0; i < result.length; i++) {
          output += result[i].word + '<br/>';
        }
      } else {
        output = 'No word vector found';
      }
      nearResults.html(output);
    });
      word2Vec.nearest(adj1_value, (error, result) => {
      let output = '';
      if (result) {
        let i = floor(random(0,result.length));
        output = result[i].word;
      } else {
        output = '[Try another word]';
      }
      adjective1Result.html(output);
    });
      word2Vec.nearest(noun1_value, (error, result) => {
      let output = '';
      if (result) {
        let i = floor(random(0,result.length));
        output = result[i].word;
      } else {
        output = '[Try another word]';
      }
      noun1Result.html(output);
    });
  });
}
