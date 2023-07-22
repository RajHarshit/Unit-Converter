let convert = document.getElementById("btn")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let input = document.getElementById("input")


convert.addEventListener("click", function() {
	let i1 = input.value
	let meters = parseFloat(i1) * 3.28084
	meters = meters.toFixed(3)

	let feet = parseFloat(i1) / 3.28084
	feet = feet.toFixed(3)

	p1.textContent = `${i1} meters = ${meters} feet | ${i1} feet = ${feet} meters`



	let liter = parseFloat(i1) * 0.2641720524
	liter = liter.toFixed(3)

	let gallon = parseFloat(i1) / 0.2641720524
	gallon = gallon.toFixed(3)

	p2.textContent = `${i1} liters = ${liter} gallons | ${i1} gallons = ${gallon} liters`



	let kilogram = parseFloat(i1) * 2.20462
	kilogram = kilogram.toFixed(3)

	let pounds = parseFloat(i1) / 2.20462
	pounds = pounds.toFixed(3)

	p3.textContent = `${i1} Kilos = ${kilogram} pounds | ${i1} pounds = ${pounds} Kilos`


})