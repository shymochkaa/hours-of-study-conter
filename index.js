let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearBtn = document.getElementById("clear-btn")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0
let addHyphen = false


incrementBtn.addEventListener("click", increment)

function increment() {
    count += 1
    countEl.textContent = count
}

saveBtn.addEventListener("click", save)

function save() {

    if (addHyphen == true){
        countStr =  " - " + count 
    } else {
        countStr =  " " + count 
        addHyphen = true
    }
    
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

clearBtn.addEventListener("click", deleteAll);

function deleteAll() {
    
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0
    addHyphen = false
    
}