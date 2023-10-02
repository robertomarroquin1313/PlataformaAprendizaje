const usuario = [
    { correo: "juan@gmail.com", contraseña: "juan123" }
];

function loging() {
    let user = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    const encontrado = usuario.find(datos => datos.correo === user && datos.contraseña === password);

    if (encontrado) {
        window.location = "/Assets/Pages/catalogo.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

class Persona {
    constructor(correo, contraseña) { 
        this.correo = correo;
        this.contraseña = contraseña;
    }
}

const agregarBtn = document.getElementById("agregar");
agregarBtn.addEventListener('click', () => { 
    const correoInput = document.getElementById("Correo");
    const passInput = document.getElementById("contraseña");
    const nuevoCorreo = correoInput.value;
    const nuevaPass = passInput.value;

    if (nuevoCorreo.trim() !== "" && nuevaPass.trim() !== "") {
        const nuevaPersona = new Persona(nuevoCorreo, nuevaPass);
        usuario.push(nuevaPersona);
        correoInput.value = "";
        passInput.value = "";

       
        console.log(usuario);
    }
});







/*function loging() {
    let user = document.getElementById("Correo").value;
    let password = document.getElementById("password").value;

    fetch('Usuarios.txt')
        .then(carga => carga.text())
        .then(datos => {
            const linea = datos.split('\n');
            let found = false;

            for (const line of linea) {
                const [storedUser, storedPassword] = line.split(':');
                if (user === storedUser && password === storedPassword) {
                    found = true;
                    break;
                }
            }

            if (found) {
                window.location = "catalogo.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error("Error al cargar el archivo de contraseñas:", error);
        });
}*/
/*
function loging() {
    let user = document.getElementById("Correo").value;
    let password = document.getElementById("password").value;
    fetch('Usuarios.json')
        .then(response => response.json())
        .then(data => {
   
            const encontrado = data.find(datos => datos.correo === user && datos.contrasena === password);
            if (encontrado) {
                window.location = "catalogo.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}*/