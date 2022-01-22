// initialize count as 0
// listen for clicks on the increment button
// increment the count button whenn the button is clicked 
// change the countel p in the html to reflect the new count

let count = 0
logcount = document.getElementById("countel")
saveEl = document.getElementById("saveel")

function increment() {
	count = count + 1
	logcount.innerHTML = count
}

function save() {
	let savestr = count + " - "
	saveEl.innerHTML += savestr
	logcount.innerHTML = 0
	count = 0
}