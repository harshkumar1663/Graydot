// function to allow dropping of dragged object
function allowDrop(event) {
    event.preventDefault();
}
// function to init dragging of the object
function drag(event, id) {
    event.dataTransfer.setData("text/plain", id);
    event.target.classList.add("dragging");
}
// function to handle dropping of the object into the second container
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain"); //getting id of dropped element
    var Element = document.getElementById(data); //getting element by extracted id
    container2.appendChild(Element); //appending new element to the 2nd container
    Element.classList.remove("dragging"); //remove 'dragging' class to remove opacity effect
    displaySuccessMessage(); 
}

// function to display success message upon successful drag-and-drop
function displaySuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Item dropped successfully!";
}
// function to reset both the containers upon pressing of button
function resetContainers() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    container2.querySelectorAll("img").forEach(function (img) {
        container1.appendChild(img);
    });
    container2.innerHTML = "<h3>Container 2</h3>";
    successMessage.textContent = "";
}