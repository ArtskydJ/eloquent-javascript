var extractDate = function(str) {
	if (!/\d\d?[\/\-]\d\d?[\/\-]\d{4}/.test(str))
		throw new Error("Bad date in " + str + ".")
	return new Date(str)
}

if (1) {
	console.log(extractDate("1/2/2013"))
	console.log(extractDate("1-3-2013"))
	console.log(extractDate("13/2/2013"))
	console.log(extractDate("1-2/2013"))
}