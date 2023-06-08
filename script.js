function allowDrop(event) {
    event.preventDefault();
}

function drag(event, id) {
    event.dataTransfer.setData("text/plain", id);
    event.target.classList.add("dragging");
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var Element = document.getElementById(data);
    container2.appendChild(Element);
    Element.classList.remove("dragging");
    displaySuccessMessage();
}

function displaySuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Item dropped successfully!";
}

function resetContainers() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    container2.querySelectorAll("img").forEach(function (img) {
        container1.appendChild(img);
    });
    container2.innerHTML = "<h3>Container 2</h3>";
    successMessage.textContent = "";
}