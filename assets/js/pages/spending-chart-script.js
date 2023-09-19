var options = {
	series: [
		{
			name: "Total Spend",
			data: [44, 55, 57],
		},
		{
			name: "Available Balance",
			data: [35, 41, 36],
		},
	],
	chart: {
		type: "bar",
		height: 191,
	},
    colors:['#304FFE', '#FDD835'],
	plotOptions: {
		bar: {
			horizontal: false,
            columnWidth: '70%',
            barHeight: '100%',
			endingShape: "rounded",
		},
	},

	dataLabels: {
		enabled: false,
	},
	stroke: {
        show: true,
        width: 10,
        colors: ['transparent']
	},
	xaxis: {
		categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
	},
	yaxis: {
		// title: {
		// 	text: "$ (thousands)",
		// },
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		// y: {
		// 	formatter: function (val) {
		// 		return "$ " + val + " thousands";
		// 	},
		// },
	},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
