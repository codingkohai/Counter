// initialize the count as zero
// listen for clicks on the increment button

// document.getElementById("count").innerHTML = 5
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0;

function increment() {
    count = count + 1;
    console.log(count);
}


// DOM = Document Object Model
function save() {  
    console.log(count)
}
