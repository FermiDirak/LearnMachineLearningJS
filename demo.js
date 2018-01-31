var brain = require('brain.js');
var fs = require('fs');
var mnist = require('mnist');

// creates a mnist set with 700 training images and 20 testing images
// ensures there are no duplicates
var set = mnist.set(100, 1);
var trainingSet = set.training;
var testingSet = set.test;

// creating a simple feed-forward neural network
var net = new brain.recurrent.RNN();
net.train(trainingSet);

var output = net.run(testingSet[0].input);

console.log(output);
