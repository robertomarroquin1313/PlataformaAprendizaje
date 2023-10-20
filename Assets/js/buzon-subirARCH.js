window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

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
