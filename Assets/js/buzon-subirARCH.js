window.addEventListener("load", () => {
    //Que busque el id del tipo de archivo que leera 
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    // reconoce el tipo de documento y lo enlista 
    input.addEventListener("change", (e) => {
        let filename = e.target.files[0].name;
        let filetype = e.target.value.split(".").pop();
        fileshow(filename, filetype);
    })

    // Apartir de los 2 campos que leera, que son tipo de archivo y su nombre, 
    //que cree nuevos componentes con estos nombres especificados.
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
        document.getElementById('Delete').addEventListener('click', function (e) {
            filewrapper.removeChild(showfileboxElem);
        });
        document.getElementById('delete').addEventListener('click', function (e) {
            filewrapper.removeChild(showfileboxElem);
        });
    }
})

//Segunda llamada 
window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper2");

    input.addEventListener("change", (e) => {
        let filename = e.target.files[0].name;
        let filetype = e.target.value.split(".").pop();
        fileshow(filename, filetype);
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

        document.getElementById('delete').addEventListener('click', function (e) {
            filewrapper.removeChild(showfileboxElem);
        });
        document.getElementById('Delete').addEventListener('click', function (e) {
            filewrapper.removeChild(showfileboxElem);
        });
    }
})
