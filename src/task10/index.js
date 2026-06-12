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
		const avgMark = sum / students[i].marks.length;
		if (avgMark >= 85) {
			avg.push({ name: students[i].name, avg: avgMark });
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
		if (revenue[cat] === undefined) {
			revenue[cat] = 0;
		}
		revenue[cat] += data[i].amount;
	}

	const result = [];
	for (const cat in revenue) {
		if (revenue[cat] > 300) {
			result.push(cat);
		}
	}
	return result;
}

function task3() {
	const paragraph =
		"The quick brown fox jumps over the lazy dog. The fox is quick.";

	let clean = "";
	for (let i = 0; i < paragraph.length; i++) {
		const ch = paragraph[i].toLowerCase();
		if ((ch >= "a" && ch <= "z") || ch === " ") {
			clean += ch;
		}
	}

	const words = [];
	let current = "";
	for (let i = 0; i < clean.length; i++) {
		if (clean[i] === " " && current !== "") {
			words.push(current);
			current = "";
		} else if (clean[i] !== " ") {
			current += clean[i];
		}
	}
	if (current !== "") words.push(current);

	const freq = {};
	for (let i = 0; i < words.length; i++) {
		if (freq[words[i]] === undefined) freq[words[i]] = 0;
		freq[words[i]]++;
	}

	const sorted = [];
	for (const word in freq) {
		sorted.push({ word, count: freq[word] });
	}

	for (let i = 0; i < sorted.length - 1; i++) {
		for (let j = i + 1; j < sorted.length; j++) {
			if (sorted[i].count < sorted[j].count) {
				const temp = sorted[i];
				sorted[i] = sorted[j];
				sorted[j] = temp;
			}
		}
	}

	const top3 = [];
	for (let i = 0; i < 3 && i < sorted.length; i++) {
		top3.push(sorted[i].word);
	}
	return top3;
}

function task4() {
	const employees = [
		{ name: "A", dept: "IT", salary: 50000 },
		{ name: "B", dept: "HR", salary: 40000 },
		{ name: "C", dept: "IT", salary: 60000 },
	];

	const groups = {};
	for (let i = 0; i < employees.length; i++) {
		const dept = employees[i].dept;
		if (groups[dept] === undefined) groups[dept] = { total: 0, count: 0 };
		groups[dept].total += employees[i].salary;
		groups[dept].count++;
	}

	let bestDept = "";
	let bestAvg = -1;
	for (const dept in groups) {
		const avg = groups[dept].total / groups[dept].count;
		if (avg > bestAvg) {
			bestAvg = avg;
			bestDept = dept;
		}
	}
	return bestDept;
}

function task5() {
	const products = [
		{ name: "Laptop", stock: 5, price: 50000 },
		{ name: "Phone", stock: 0, price: 20000 },
		{ name: "Tablet", stock: 10, price: 15000 },
	];

	let totalValue = 0;
	for (let i = 0; i < products.length; i++) {
		if (products[i].stock > 0) {
			totalValue += products[i].stock * products[i].price;
		}
	}
	return totalValue;
}

function task6() {
	const posts = [
		{ postId: 1, likes: 100, comments: 20, shares: 10 },
		{ postId: 2, likes: 200, comments: 50, shares: 30 },
	];

	const result = [];
	for (let i = 0; i < posts.length; i++) {
		const score =
			posts[i].likes * 1 + posts[i].comments * 2 + posts[i].shares * 3;
		if (score > 300) {
			result.push(posts[i].postId);
		}
	}
	return result;
}

function task7() {
	const movies = [
		{ title: "Movie A", rating: 8.5, genres: ["Action"] },
		{ title: "Movie B", rating: 9.0, genres: ["Drama"] },
	];

	const genreCount = {};
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].rating > 8) {
			for (let j = 0; j < movies[i].genres.length; j++) {
				const g = movies[i].genres[j];
				if (genreCount[g] === undefined) genreCount[g] = 0;
				genreCount[g]++;
			}
		}
	}
	return genreCount;
}

function task8() {
	const customers = [
		{
			customer: "John",
			orders: [
				{ product: "Laptop", amount: 50000 },
				{ product: "Mouse", amount: 1000 },
			],
		},
	];

	const totals = {};
	for (let i = 0; i < customers.length; i++) {
		let sum = 0;
		for (let j = 0; j < customers[i].orders.length; j++) {
			sum += customers[i].orders[j].amount;
		}
		totals[customers[i].customer] = sum;
	}

	let bestCustomer = "";
	let highest = -1;
	for (const c in totals) {
		if (totals[c] > highest) {
			highest = totals[c];
			bestCustomer = c;
		}
	}
	return bestCustomer;
}

function task9() {
	const txns = [
		{ type: "credit", amount: 1000 },
		{ type: "debit", amount: 300 },
		{ type: "credit", amount: 500 },
	];

	let credits = 0;
	let debits = 0;
	for (let i = 0; i < txns.length; i++) {
		if (txns[i].type === "credit") credits += txns[i].amount;
		else if (txns[i].type === "debit") debits += txns[i].amount;
	}
	return credits - debits;
}

function task10() {
	const users = [
		{ user: "A", actions: ["login", "logout"] },
		{ user: "B", actions: ["login", "purchase", "logout"] },
	];

	const counts = {};
	for (let i = 0; i < users.length; i++) {
		for (let j = 0; j < users[i].actions.length; j++) {
			const a = users[i].actions[j];
			if (counts[a] === undefined) counts[a] = 0;
			counts[a]++;
		}
	}

	let bestAction = "";
	let maxCount = -1;
	for (const a in counts) {
		if (counts[a] > maxCount) {
			maxCount = counts[a];
			bestAction = a;
		}
	}
	return bestAction;
}

function task11() {
	const repos = [
		{ repo: "A", stars: 100, forks: 50 },
		{ repo: "B", stars: 200, forks: 80 },
	];

	let bestRepo = "";
	let bestScore = -1;
	for (let i = 0; i < repos.length; i++) {
		const score = repos[i].stars * 2 + repos[i].forks;
		if (score > bestScore) {
			bestScore = score;
			bestRepo = repos[i].repo;
		}
	}
	return bestRepo;
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();
task10();
task11();
