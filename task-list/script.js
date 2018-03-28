//Query  selectors
const clearList = document.querySelector('#clearList'); //cleat list btn
const inputText = document.querySelector('#itemToAdd'); //text input
const addToList = document.querySelector('#addToList'); //add to list button
const theList = document.querySelector('#theList'); //the list area HTML div
const checkBox = document.querySelector('#box1');

//Other Variables
var index = 0;
var tasks = {}; //this array stores the strings for the list items

//start showing the clear list button after there are entries submitted
function displayClearButton() {
    if (index != 0) {
        clearList.classList.remove("oculto"); //so the delete button starts showing
    } else {
        clearList.classList.add("oculto");
    }
}

//adds the text inputs as strings to the array of the tasks
function addStringToArray() {
    tasks[index] = inputText.value;
}

//creating divs and attributing them a class
function createDiv(classe) {
    var div = document.createElement("div");
    div.classList.add(classe);
    return div;
}

//adds the input text value to the tasks array
function addItemToList() {

    if (inputText.value != "") {
        addStringToArray();
        childNode(theList, "list-item");
        index = index + 1;
    } else {
        alert("Please type some text in the input field!");
    }
    console.log(tasks);
    displayClearButton();
}

//when clear list button is clicked
function clearListContent() {
    //console.log("clicked the button to clear list");
    tasks = {};
    index = 0;
    theList.innerHTML = "";
}

/* Event listeners */

//When button add to list is clicked
addToList.addEventListener("click", function(event) {
    //console.log("the add to list button was clicked");
    addItemToList();
    inputText.value = "";
}); //for every click on the button

//when users clicks enter after submitting a text entry
inputText.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        //console.log("an item was added to the list");
        addItemToList();
        inputText.value = "";
    }
});

//When button clear list is clicked
clearList.addEventListener("click", function(event) {
    clearListContent();
    displayClearButton();
}); //for every click on the button

//checkbox is clicked
function crossOut() {
    for (let i = 0; i < index; i++) {
        console.log("index: " + index + " innerHTML: " + document.getElementById('conteudo' + i).innerHTML);
    }
}