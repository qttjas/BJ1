//Counter App 

function incrementButton() {
    var element = document.getElementById("count-el");
    var value = parseInt(element.innerHTML); 

    value++; 

    console.log(value);
    element.innerHTML = value; 
}
