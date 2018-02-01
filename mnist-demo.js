var brain = require('brain.js');
var fs = require('fs');
var mnist = require('mnist');

// creates a mnist set with 500 training images and 20 testing images
// without duplicates
var set = mnist.set(500, 10);
var trainingSet = set.training;
var testingSet = set.test;

// creating a simple feed-forward neural network
// var net = new brain.NeuralNetwork();
// net.train(trainingSet, {
// 	errorThresh: 0.005,
// 	log: true,
// 	logPeriod: 1,
// 	learningRate: 0.1
// });

// var output = net.run(testingSet[0].input);


console.log(testingSet[0]);


// console.log(output);
