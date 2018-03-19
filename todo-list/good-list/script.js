
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');

function inputLength() {
	return input.value.length;
};


// this creates the li element with a checkbox and a delete button
function createList() {
	var li = document.createElement("li");
		ul.appendChild(li);
	var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.className = "checkbox"
		li.appendChild(checkbox);
	var span = document.createElement("span");
		li.appendChild(span);
		span.appendChild(document.createTextNode(input.value));
	var deleteButton = document.createElement("button");
		deleteButton.className = "delete";
		deleteButton.appendChild(document.createTextNode("delete"));
		li.appendChild(deleteButton);
	var	div = document.getElementById("clear");
		if (ul.children.length === 1) {
			var clearList = document.createElement("button");
				clearList.id = "clear-list";
				clearList.appendChild(document.createTextNode("clear list"));
				div.appendChild(clearList);
			}
		input.value = "";
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// makes sure that the input field is not empty before creating the list
function addListAfterClick() {
	if (inputLength() > 0) {
		createList();
	}
};

// on enter creates list element 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode /* event.which */ === 13) {
		createList();
	}
};


// this toggles the done class(line-tought) if you click on the checkbox
// or the li text
function listActions(e) {

	if (e.target.className === "checkbox") {
		e.target.nextElementSibling.classList.toggle("done");
	}
	else if (e.target.tagName === "SPAN") {
		e.target.classList.toggle("done");
		if (e.target.className === "done") {
			e.target.previousElementSibling.checked = true;
		} else {
			e.target.previousElementSibling.checked = false;
		}
	}
	else if (e.target.className === "delete") {
		e.target.parentElement.remove();
	}
}
ul.addEventListener("click", listActions);

function whatIClick(e) {
	alert(e.target.className);
}

// window.addEventListener("click", whatIClick);

function clearList(e) {
	if (e.target.id === "clear-list" && confirm('Remove all items from list?')) {
		ul.innerHTML = '';
		e.target.remove();
	}
}

window.addEventListener("click", clearList);