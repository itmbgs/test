let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function(){
    let task = document.createElement("li");
    task.innerText = input.value + " ";

    let delButton = document.createElement("button");
    delButton.innerText = "X";
    delButton.classList.add("delete");

    let lineBreak = document.createElement("br");

    ul.appendChild(task);
    input.value = "";
    task.appendChild(delButton);
    ul.appendChild(lineBreak);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
