var brain = require('brain'); // Machine learning
var fs = require('fs');       // file reading / writing
var mnist = require('mnist'); // mnist dataset

// creates a mnist set with 500 training images and 20 testing images
// without duplicates
var set = mnist.set(500, 10);
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

var output = net.run(testingSet[0].input);
console.log(output);

var model = JSON.stringify(net.toJSON());

console.log(typeof model);

fs.writeFile('./model.json', 'neuralnet = \'' + model + '\';', 'utf8', function(error) {
	if (error) {
		console.error(error);
	}

	console.log('model saved!');
});


