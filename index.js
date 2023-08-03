// initialize the count as zero
// listen for clicks on the increment button

// document.getElementById("count").innerHTML = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


let count = 0;

function increment() {
    count += 1; // += is the same as count = count + 1 -- it's just short hand
    countEl.textContent = count
}


// DOM = Document Object Model
function save() {  
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}


