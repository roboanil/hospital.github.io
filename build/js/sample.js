/**
 * Bar chart
 */
var chart = c3.generate({
	bindto: '#chart',
	data: {
		columns: [
			['data1', 30, 200, 100, 400, 150, 250],
			['data2', 50, 20, 10, 40, 15, 25]
		],
		axes: {
			data2: 'y2'
		},
		types: {
			data2: 'bar' // ADD
		}
	},
	axis: {
		y: {
			label: {
				text: 'Y Label',
				position: 'outer-middle'
			}
		},
		y2: {
			show: true,
			label: {
				text: 'Y2 Label',
				position: 'outer-middle'
			}
		}
	}
});

/**
 * Area chart
 */
var chart = c3.generate({
	bindto: '#chart1',
	data: {
			columns: [
					['data1', 300, 350, 300, 0, 0, 0],
					['data2', 130, 100, 140, 200, 150, 50]
			],
			types: {
					data1: 'area',
					data2: 'area-spline'
			}
	}
});

