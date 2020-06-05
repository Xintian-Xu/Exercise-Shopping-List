var button = document.getElementById("enter"); //select the button
var input = document.getElementById("userinput"); // select the userinput
var ul = document.querySelector("ul");	//select the ul tag
var items = ul.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("delete");

// add delete button to the pre-existing items
function deleteBtn (){
	for(var i=0; i < items.length; i++){
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		btn.onclick = removeParent;
		items[i].appendChild(btn);
	}
}
deleteBtn();

function inputLength() { //returns length of input
	return input.value.length;
}

function removeParent(event) {
	event.target.parentNode.remove();
}

function createListElement() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.onclick = removeParent;

	var li = document.createElement("li");	// create a new list element
	li.appendChild(document.createTextNode(input.value));	//create text with input.value
	li.appendChild(btn);

	ul.appendChild(li);		// add it as a child of ul
	input.value = "";		// reset input.value
}

function addListAfterClick() { //check length of input
	if (inputLength() > 0) {	//if user input not empty
		createListElement();	//add the new element
	}
}

function addListAfterKeypress(event) { //enters after a keypress
	if (inputLength() > 0 && event.keyCode === 13) { // return key === 13 char code
		createListElement();
	}
}

//strikethrough item
function crossOffItem(event){
	event.target.ClassList.toggle("done");
}

// works by clicking on 'enter' or pressing return key
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//strikesthrough item after clicking
ul.addEventListener("click", crossOffItem);
