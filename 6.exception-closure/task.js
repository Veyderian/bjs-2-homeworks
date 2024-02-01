function parseCount(quantity) {
	const value = parseFloat(quantity);
	if (isNaN(value)) {
		throw new Error("Невалидное значение");
	}
	return value;
}

function validateCount(quantity) {
	try {
		return parseCount(quantity)
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || b + c < a || a + c < b) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const hm = this.perimeter / 2;
		return +Math.sqrt(hm * (hm - this.a) * (hm - this.b) * (hm - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}
    

