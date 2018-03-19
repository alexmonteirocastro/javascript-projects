const addForm = document.querySelector('.addForm');
const newItem = document.querySelector('#todoItem');
const addItemButton = document.querySelector('#newItem');
const listItems = document.querySelector('#listItems');
const listClear = document.querySelector('#clearList');

function clearInput(){
	newItem.value = "";
}

//this function appends <li> items to the list
function appendToList(){
	var li = document.createElement("li");
	var checkItem = document.createElement("input");
	checkItem.type = "checkbox";
	checkItem.value = "checkListItem"
	checkItem.checked = false;
	var deleteMe = document.createElement("button");
	deleteMe.innerHTML = "X"; 
	deleteMe.classList.add("deleting");


	if (newItem.value != "") {

		li.appendChild(checkItem); //generates checkbox
		li.appendChild(document.createTextNode(newItem.value)); 
		//gets string of text entered from input field and includes it on the new <li> item
		listItems.appendChild(li); //adds new <li> to the <ul> in textfield
		li.appendChild(deleteMe);
		clearInput();
		//console.log("append to List was executed");

	
		//Event handler for when checkbox is clicked
		checkItem.addEventListener("click", function(e){
			//console.log("check box has been clicked");
			li.classList.toggle('rohlik');
		}, false);

		//Event handler for when delete "button" is clicked
		deleteMe.addEventListener("click", function(e){
			//console.log("delete has been clicked");
			listItems.removeChild(li);
		}, false);

		/*this should enable the list items to be editable*/
		/*
		li.addEventListener("click", function(e){
			//console.log("clicked a list item");
			li.innerHTML = "<input type='text' name='itemUpdate' id='itemUpdate' autofocus>";
		},false)
		*/
		

	} else {
		alert("Please fill in something!")
	}

	
}

//clears the list by deleting all its child <li> elements
function emptyList(){

	//console.log("list was cleared");
	while(listItems.firstChild){
		listItems.removeChild(listItems.firstChild);
	} 

}



//Event listeners for the Adding items - the input filed and the buttons

//when the button to add an item is clicked 
addItemButton.addEventListener("click", function(event){
	//console.log("the button was clicked");
	event.preventDefault(); //prevents the page from reloading
	appendToList();
	}, false); //for every click on the button

//when people fill in the text and press ENTER
newItem.addEventListener("keypress", function(e){
	if (e.keyCode == 13) {
		//appendToList();
		//console.log("I pressed enter!");
	}
});

//when the button to clear the list is clicked
listClear.addEventListener("click", function(e){
	emptyList();
}, false);

function disappear(){
	
		console.log("we have an empty string");
		//listItems.removeChild(li);
}

