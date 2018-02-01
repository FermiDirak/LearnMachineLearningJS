var digit = mnist[3].get();

console.log(digit);

var mnistDrawing = document.getElementById('mnist-grid');

for (var i = 0; i < 28; i++) {
	var row = $('<div>', {
		'class': 'mnist-row',
	});

	for (var j = 0; j < 28; j++) {

		var cell = $('<div>', {
			class: 'mnist-cell',
			css: {
				'opacity': digit[28 * i + j],
			}
		});

		row.append(cell);
	}

	$('.mnist-grid').append(row);
}