let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearBtn = document.getElementById("clear-btn")
let count = 0



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


clearBtn.addEventListener("click", deleteAll);

function deleteAll() {
    
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0
    
}