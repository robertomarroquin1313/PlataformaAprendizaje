window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");
    const filewrapper2 = document.getElementById("filewrapper2"); // Agregar la referencia a filewrapper2

    // Crear un arreglo para almacenar la información de los elementos
    const storedElements = [];

    input.addEventListener("change", (e) => {
        let filename = e.target.files[0].name;
        let filetype = e.target.value.split(".").pop();
        const element = fileshow(filename, filetype);
        
        // Agregar el elemento a la lista
        storedElements.push({ filename, filetype });
        saveElementsToLocalStorage(storedElements);
    })

    const fileshow = (filename, filetype) => {
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h4");
        filetitleElem.innerHTML = filename;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        filewrapper.append(showfileboxElem);

        //Que remueva los archivos subidos con un evento click, mediante el id de el boton DELETE
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener('click', function (e) {
            filewrapper.removeChild(showfileboxElem);
            // Remover el elemento del arreglo
            storedElements.pop();
            saveElementsToLocalStorage(storedElements);
        });
        rightElem.appendChild(deleteButton);

        // Llamar a la función que agrega el mismo elemento a filewrapper2
        addToFilewrapper2(filename, filetype);

        return showfileboxElem;
    }

    // Función para agregar elementos a filewrapper2
    const addToFilewrapper2 = (filename, filetype) => {
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h4");
        filetitleElem.innerHTML = filename;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        filewrapper2.append(showfileboxElem);
    }

    // Función para guardar los elementos en localStorage
    const saveElementsToLocalStorage = (elements) => {
        // Convierte el arreglo en una cadena JSON
        const elementsString = JSON.stringify(elements);

        // Almacena la cadena en localStorage
        localStorage.setItem('storedElements', elementsString);
    }

    // Recuperar los elementos guardados en localStorage al cargar la página
    const storedElementsString = localStorage.getItem('storedElements');
    if (storedElementsString) {
        const storedElements = JSON.parse(storedElementsString);
        for (const elementData of storedElements) {
            fileshow(elementData.filename, elementData.filetype);
        }
    }
})
