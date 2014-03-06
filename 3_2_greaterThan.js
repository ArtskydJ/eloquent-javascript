function GreaterThan(x) {
	return function(y) {
		return x<y
	}
}

var greaterThan17 = GreaterThan(17)
var greaterThan34 = GreaterThan(34)

console.log(greaterThan17(15))
console.log(greaterThan34(15)+"\n")

console.log(greaterThan17(29))
console.log(greaterThan34(29)+"\n")

console.log(greaterThan17(42))
console.log(greaterThan34(42))