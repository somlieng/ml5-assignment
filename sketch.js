//Declare word2Vec model
let word2Vec;

//Declare all DOM elements
let submitButton;
let showButton;

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

let noun4input;
let noun4_value;
let noun4Result;

let familyMemberinput;
let familyMember_value;
let familyMember1Result;
let familyMember2Result;
let familyMember3Result;

//Divs for song lyrics
let songLyrics;
let intro;
let verse1;
let verse2;
let verse3;
let verse4;
let outro;

//Divs for input
let verse1Input;
let verse2Input;
let verse3Input;
let verse4Input;
let outroInput;

//count to turn on verse and inputs
let verses = 0;
let input = 0;
let verseShowing = false;
let inputShowing = false;

function modelLoaded() {
  select('#status').html('Model Loaded');
}

function setup() {
  noLoop();
//  noCanvas();
    createCanvas(windowWidth,windowHeight);
    
    verse1Input = select('#verse1Input');
    verse1Input.hide();
    
    verse2Input = select('#verse2Input');
    verse2Input.hide();
    
    verse3Input = select('#verse3Input');
    verse3Input.hide();
    
    verse4Input = select('#verse4Input');
    verse4Input.hide();
    
    outroInput = select('#outroInput');
    outroInput.hide();
    
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
    
    showButton.hide();
    
    //button press function
    fillLyrics(submitButton);
    showMoreInputs(showButton);
    
}

function fillLyrics(button){
    button.mousePressed(bohemianRhapsody);
}

function showMoreInputs(button){
    button.mousePressed(showInputs);
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
    calcWord(noun4_value,noun4Result);
    calcWord(familyMember_value,familyMember1Result);
    calcWord(familyMember_value,familyMember2Result);
    calcWord(familyMember_value,familyMember3Result);
}

function initializeDOM(){
    //Initialize all DOM elements
    submitButton = select('#submit');
    showButton = select('#moreInputs');
    
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
    
    noun4input = select('#wind');
    noun4_value = noun4input.value();
    noun4Result = select('#noun4');
    
    familyMemberinput = select('#mama');
    familyMember_value = familyMemberinput.value();
    familyMember1Result = select('#family1');
    familyMember2Result = select('#family2');
    familyMember3Result = select('#family3');
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
    switch(verses){
        case 0:
            intro.show();
            showButton.show();
            verses++;
            verseShowing = true;
            break;
        case 1:
            if(inputShowing === true){
              verse1.show();
              verses++;
              inputShowing = false;
              verseShowing = true;
              break;  
            }
            break;
        case 2:
            if(inputShowing === true){
              verse2.show();
              verses++;
              inputShowing = false;
              verseShowing = true;
              break;  
            }
            break;
        case 3:
            if(inputShowing === true){
              verse3.show();
              verses++;
              inputShowing = false;
              verseShowing = true;
              break;  
            }
            break;
        case 4:
            if(inputShowing === true){
              verse4.show();
              verses++;
              inputShowing = false;
              verseShowing = true;
              break;  
            }
            break;
        case 5:
            if(inputShowing === true){
              outro.show();
              inputShowing = false;
              verseShowing = true;
              break;  
            }
            break;
    }
}

function showInputs(){
    switch(input){
        case 0:
            verse1Input.show();
            input++;
            verseShowing = false;
            inputShowing = true;
            break;   
        case 1:
            if(verseShowing === true){
                verse2Input.show();
                verseShowing = false;
                inputShowing = true;
                input++;
                break;
            }
            break;
    }
}
