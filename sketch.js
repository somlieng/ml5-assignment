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

let noun5input;
let noun5_value;
let noun5Result;

let bodypartinput;
let bodypart_value;
let bodypartResult;

let verb2input;
let verb2_value;
let verb2Result;

let carryinput;
let carry_value;
let carryResult1;
let carryResult2;

let verb3input;
let verb3_value;
let verb3Result;

let bodypart2input;
let bodypart2_value;
let bodypart2Result;

let verb4input;
let verb4_value;
let verb4Result;

let noun6input;
let noun6_value;
let noun6Result;

let verb5input;
let verb5_value;
let verb5Result;

let adjective3input;
let adj3_value;
let adjective3Result;

let noun7input;
let noun7_value;
let noun7Result;

let nature1input;
let nature1_value;
let nature1Result;

let nature2input;
let nature2_value;
let nature2Result;

let humaninput;
let human_value;
let humanResult;

let verb6input;
let verb6_value;
let verb6Result;

let verb7input;
let verb7_value;
let verb7Result;

let noun8input;
let noun8_value;
let noun8Result;

let verb8input;
let verb8_value;
let verb8Result;

let verb9input;
let verb9_value;
let verb9Result;

let verb10input;
let verb10_value;
let verb10Result;

let verb11input;
let verb11_value;
let verb11Result;

let noun9input;
let noun9_value;
let noun9Result;

let verb12input;
let verb12_value;
let verb12Result;

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

function preload(){
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
}

function setup() {
  noLoop();
//  noCanvas();
    createCanvas(windowWidth,windowHeight);

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
    calcWord(noun5_value,noun5Result);
    calcWord(bodypart_value,bodypartResult);
    calcWord(verb2_value,verb2Result);
    calcWord(carry_value,carryResult1);
    calcWord(carry_value,carryResult2);
    
    calcWord(verb3_value,verb3Result);
    calcWord(bodypart2_value,bodypart2Result);
    calcWord(verb4_value,verb4Result);
    calcWord(noun6_value,noun6Result);
    calcWord(verb5_value,verb5Result);
    
    calcWord(adj3_value,adjective3Result);
    calcWord(noun7_value,noun7Result);
    calcWord(nature1_value,nature1Result);
    calcWord(nature2_value,nature2Result);
    calcWord(human_value,humanResult);
    calcWord(verb6_value,verb6Result);
    calcWord(verb7_value,verb7Result);
    calcWord(noun8_value,noun8Result);
    
    calcWord(verb8_value,verb8Result);
    calcWord(verb9_value,verb9Result);
    calcWord(verb10_value,verb10Result);
    calcWord(verb11_value,verb11Result);
    
    calcWord(noun9_value,noun9Result);
    calcWord(verb12_value,verb12Result);
    
    showLyrics();
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
    
    noun5input = select('#gun');
    noun5_value = noun5input.value();
    noun5Result = select('#noun5');
    
    bodypartinput = select('#head');
    bodypart_value = bodypartinput.value();
    bodypartResult = select('#bodypart');
    
    verb2input = select('#thrown');
    verb2_value = verb2input.value();
    verb2Result = select('#verb2');
    
    carryinput = select('#carry');
    carry_value = carryinput.value();
    carryResult1 = select('#carry1');
    carryResult2 = select('#carry2');
    
    verb3input = select('#shivers');
    verb3_value = verb3input.value();
    verb3Result = select('#verb3');

    bodypart2input = select('#spine');
    bodypart2_value = bodypart2input.value();
    bodypart2Result = select('#bodypart2');

    verb4input = select('#leave');
    verb4_value = verb4input.value();
    verb4Result = select('#verb4');
    
    noun6input = select('#truth');
    noun6_value = noun6input.value();
    noun6Result = select('#noun6');

    verb5input = select('#die');
    verb5_value = verb5input.value();
    verb5Result = select('#verb5');
    
    adjective3input = select('#little');
    adj3_value = adjective3input.value();
    adjective3Result = select('#adj3');

    noun7input = select('#silhouetto');
    noun7_value = noun7input.value();
    noun7Result = select('#noun7');

    nature1input = select('#thunderbolt');
    nature1_value = nature1input.value();
    nature1Result = select('#nature1');

    nature2input = select('#lightning');
    nature2_value = nature2input.value();
    nature2Result = select('#nature2');
    
    humaninput = select('#boy2');
    human_value = humaninput.value();
    humanResult = select('#human');

    verb6input = select('#loves');
    verb6_value = verb6input.value();
    verb6Result = select('#verb6');

    verb7input = select('#spare');
    verb7_value = verb7input.value();
    verb7Result = select('#verb7');

    noun8input = select('#devil');
    noun8_value = noun8input.value();
    noun8Result = select('#noun8');
    
    verb8input = select('#stone');
    verb8_value = verb8input.value();
    verb8Result = select('#verb8');
    
    verb9input = select('#spit');
    verb9_value = verb9input.value();
    verb9Result = select('#verb9');

    verb10input = select('#love');
    verb10_value = verb10input.value();
    verb10Result = select('#verb10');

    verb11input = select('#leave');
    verb11_value = verb11input.value();
    verb11Result = select('#verb11');

    noun9input = select('#wind2');
    noun9_value = noun9input.value();
    noun9Result = select('#noun9');

    verb12input = select('#blows');
    verb12_value = verb12input.value();
    verb12Result = select('#verb12');
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

//show new lyrics for words based on if the previous input has been shown
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

//show new inputs for words based on if the previous verse has been shown
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
        case 2:
            if(verseShowing === true){
                verse3Input.show();
                verseShowing = false;
                inputShowing = true;
                input++;
                break;
            }
            break;
        case 3:
            if(verseShowing === true){
                verse4Input.show();
                verseShowing = false;
                inputShowing = true;
                input++;
                break;
            }
            break;
        case 4:
            if(verseShowing === true){
                outroInput.show();
                verseShowing = false;
                inputShowing = true;
                break;
            }
            break;
    }
}
