// function changeButtonColor() {
//     document.getElementById("button").className= "yellow";
// } // use onclick = "function()" in html tag(this is without bootstrap)

function changeButtonColors() {
    let my_element = document.getElementById("button");
    if (my_element.classList.contains("btn-danger")) {
        my_element.classList.remove("btn-danger");
        my_element.classList.add("btn-primary");
    } else {
        my_element.classList.remove("btn-primary");
        my_element.classList.add("btn-danger");
    }
    // console.log(my_element.classList);
    console.log(Date.now());
}
let id = window.setInterval(function () { 
    changeButtonColors();
},  10000);;

window.addEventListener("click", function(event) {
    this.clearInterval(id);
    if (event.target.tagName == "BUTTON") {
        event.target.classList.remove("btn-danger");
        event.target.classList.add("btn-primary");
        console.log(Date.now());
    }
    id = this.setInterval(function () { 
        changeButtonColors();
    },  10000);
})

// window.clearInterval(100000);