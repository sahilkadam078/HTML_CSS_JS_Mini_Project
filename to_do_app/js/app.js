let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let task = inp.value.trim();   // remove spaces

    if (task === "") {
        alert("⚠️ Please enter a task!");
        return;  // stop here
    }

    // Capitalize first letter
    task = task.charAt(0).toUpperCase() + task.slice(1);

    let item = document.createElement("li");
    item.innerText = task;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

// ✅ Enter key functionality
inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        btn.click();   // just trigger the button click
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
