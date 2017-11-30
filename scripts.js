

function getTriangleArea(a,h) {
	
	if (a <= 0 && h <= 0) {
		return "Nieprawidłowe dane";
	}

	return a*h/2
}

console.log (getTriangleArea(10,6));

var triangle1Area = getTriangleArea(10,15);

console.log(triangle1Area);

var triangle2Area = getTriangleArea(12,11);

console.log(triangle2Area);

var triangle3Area = getTriangleArea(5,7);

console.log(triangle3Area);



