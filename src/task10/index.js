function task1() {
	const students = [
		{ name: "John", marks: [80, 90, 85] },
		{ name: "Emma", marks: [95, 92, 98] },
		{ name: "Alex", marks: [60, 70, 65] },
	];
	const avg = [];
	for (let i = 0; i < students.length; i++) {
		let sum = 0;
		for (let j = 0; j < students[i].marks.length; j++) {
			sum += students[i].marks[j];
		}
		const avg = sum / students[i].marks.length;
		if (avg >= 85) {
			avg.push({ name: students[i].name, avg });
		}
	}

	for (let i = 0; i < avg.length - 1; i++) {
		for (let j = i + 1; j < avg.length; j++) {
			if (avg[i].avg < avg[j].avg) {
				const temp = avg[i];
				avg[i] = avg[j];
				avg[j] = temp;
			}
		}
	}
	return avg;
}
function task2() {
	const data = [
		{ category: "Electronics", amount: 500 },
		{ category: "Books", amount: 100 },
		{ category: "Electronics", amount: 300 },
		{ category: "Clothing", amount: 200 },
	];

	const revenue = {};
	for (let i = 0; i < data.length; i++) {
		const cat = data[i].category;
		if (revenue[cat] === undefined) revenue[cat] = 0;
		revenue[cat] += data[i].amount;
	}

	const result = [];
	for (const cat in revenue) {
		if (revenue[cat] > 300) {
			result.push(cat);
		}
	}
}
