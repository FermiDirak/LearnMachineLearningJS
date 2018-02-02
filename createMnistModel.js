var brain = require('brain'); // Machine learning
var fs = require('fs');       // file reading / writing
var mnist = require('mnist'); // mnist dataset

// creates a mnist set with 500 training images and 20 testing images
// mnist.set ensures no duplicates in dataset
var set = mnist.set(500, 50);
var trainingSet = set.training;
var testingSet = set.test;

// creating a simple feed-forward neural network
var net = new brain.NeuralNetwork();
net.train(trainingSet, {
	errorThresh: 0.005,
	log: true,
	logPeriod: 1,
	learningRate: 0.1,
});

// litmus test for quality of model
var output = net.run(testingSet[0].input);
console.log(output);

// get model ready for writing to file
var model = JSON.stringify(net.toJSON());
var modelString = 'neuralnet = \'' + model + '\';';

// save model to file
fs.writeFile('./model.json', modelString, 'utf8', function(error) {
	if (error) {
		console.error(error);
	}

	console.log('model saved!');
});