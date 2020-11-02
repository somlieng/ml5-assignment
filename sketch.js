//DO NOT SUBMIT THIS CODE THIS IS A STRAIGHT COPY

let classifier;
let imageResult;

let videoBox;

//Trained fruits and vegetable model
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/uowWv7iP7/';

function setup() {
    noCanvas();
  // Create a camera input
    videoBox = createCapture(VIDEO);
    var videoDiv = document.getElementById("video");
    videoDiv.appendChild(videoBox);
  // Initialize the Image Classifier method with MobileNet and the video as the second argument
//  classifier = ml5.imageClassifier(imageModelURL + 'model.json', video, modelReady);
    classifier = ml5.imageClassifier('MobileNet', video, modelReady);
    imageResult = createP('Loading model and video...');
    document.getElementById("results").appendChild(imageResult);  
}

function modelReady() {
  console.log('Model Ready');
  classifyVideo();
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(gotResult);
}

// When we get a result
function gotResult(err, results) {
  // The results are in an array ordered by confidence.
  imageResult.html(results[0].label + ' ' + nf(imageResult[0].confidence, 0, 2));
  classifyVideo();
}
