function addtodo() {
    let data = document.querySelector("#text").value.trim();
    if (data === "") return; 
    let contain = document.createElement("div");
    contain.classList.add("todo-item");
    let t = document.createElement("div");
    t.classList.add("todo-text");
    t.innerText = data;
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.classList.add("delete-btn");
    contain.appendChild(t);
    contain.appendChild(button);
    document.querySelector(".todo").appendChild(contain);
    document.querySelector("#text").value = "";
    button.addEventListener("click", () => {
        contain.remove();
    });
}
