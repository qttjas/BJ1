let count = 0; 

function incrementButton() {
    count++; 
    document.getElementById("count-el").innerHTML = count;
}

function save() {
    let saveEl = document.getElementById("save-el");
    saveEl.innerHTML += count + " - ";
}
