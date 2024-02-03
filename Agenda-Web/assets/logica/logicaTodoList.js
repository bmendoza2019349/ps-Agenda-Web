const inputBox = document.getElementById("input-box");
    const listContainer = document.querySelector(".list-container");
    const listContainerUrgente = document.querySelector(".list-container-urgente");
    const prioridadCheckbox = document.getElementById("prioridad-checkbox");

    function AgregarTarea() {
        if (inputBox.value === '') {
            alert("Ingrese su tarea");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            li.addEventListener("dblclick", function () {
                inputBox.value = li.textContent.trim();
                li.remove();
            });

            if (prioridadCheckbox.checked) {
                // Si el checkbox de prioridad está marcado, agregar la tarea al list-container-urgente
                listContainerUrgente.appendChild(li);
            } else {
                // Si no está marcado, agregar la tarea al list-container
                listContainer.appendChild(li);
            }
        }
        inputBox.value = "";
        saveData();
    }

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            clearData();
        }

    }, false);

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function clearData() {
        localStorage.removeItem("data",listContainer.innerHTML);
        saveData();
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();

