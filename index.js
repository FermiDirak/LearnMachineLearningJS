/* -------------------- LOGIC -------------------- */

/**
 * Loads mnist model
 * @return mnist model
 */
function LoadMnistModel() {
	var net = new brain.NeuralNetwork();

	net.fromJSON(JSON.parse(neuralnet));

	window.net = net;
}

/**
 * Gets index of largest value in an array
 * @param arr Array to extract largest value index out of
 * @return The index of the largest value in the array
 */
function getLargestValueInIndex(arr) {
	var largestIndex = -1;
	var largestValue = -Infinity;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > largestValue) {
			largestValue = arr[i];
			largestIndex = i;
		}
	}

	return largestIndex;
}

/**
 * Gets random mnist digit
 * @return random mnist digit as a 1D array
 */
function getRandomMnistDigit() {
	var number = Math.floor(Math.random() * 10);

	return mnist[number].get()
}

/**
 * renders an mnist digit on the dom
 * @param mnistDigit: a 1D 28 * 28 array representing an mnist number
 */
function renderMnistDigit(mnistDigit) {
	var mnistGrid = $('.mnist-grid');
	mnistGrid.empty();

	console.log('hi');

	for (var i = 0; i < 28; i++) {
		var row = $('<div>', {
			'class': 'mnist-row',
		});

		for (var j = 0; j < 28; j++) {

			var cell = $('<div>', {
				class: 'mnist-cell',
				css: {
					'opacity': mnistDigit[28 * i + j],
				}
			});

			row.append(cell);
		}

		mnistGrid.append(row);
	}
}

/* -------------------- CONTROLLERS -------------------- */

/* Gets a new mnist digit and predicts on it */
function getNewMnistNumber() {
	var digit = getRandomMnistDigit();
	renderMnistDigit(digit);

	var oneHotVector = net.run(digit).map(function (score) {
		return score.toFixed(4); // cull to 4 decimal places
	});

	$('.mnist-guess').text(getLargestValueInIndex(oneHotVector));

	$('.mnist-one-hot-vector').text('[ ' + oneHotVector.join(' , ') + ' ]');
}

/* -------------------- INITIALIZATION -------------------- */

$(document).ready(function() {
	LoadMnistModel();
	getNewMnistNumber();

	$('#new-number').on('click', function() {
		getNewMnistNumber();
	});
});