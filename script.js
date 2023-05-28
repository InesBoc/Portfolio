
//import { ContactoNuevo } from "./contactoNuevo.js";

/// BOTON DARK/LIGHT MODE

let modo=document.getElementById("modo");
let body=document.body;

modo.addEventListener("click", function() {
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor==true) {
    body.classList.add("dark")
} else{
    body.classList.remove("dark")
}


// MENU HAMBURGUESA ///

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav-menu_visible");
})


// ANIMACIONES SKILLS

function mostrarScroll(){
    let animado = document.querySelector(".animado1");
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado = animado.offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
        animado.style.opacity = 1;
        animado.classList.add("mostrarArriba");
    }
}
window.addEventListener("scroll", mostrarScroll);



///ANIMADO2
function mostrarScroll2(){
    let animado = document.querySelector(".animado2");
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado = animado.offsetTop;
    if (alturaAnimado - 500 < scrollTop) {
        animado.style.opacity = 1;
        animado.classList.add("mostrarArriba");
    }
}
window.addEventListener("scroll", mostrarScroll2);

///ANIMADO3

function mostrarScroll3(){
    let animado = document.querySelector(".animado3");
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado = animado.offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
        animado.style.opacity = 1;
        animado.classList.add("mostrarArriba");
    }
}
window.addEventListener("scroll", mostrarScroll3);

//ANIMADO4

function mostrarScroll4(){
    let animado = document.querySelector(".animado4");
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado = animado.offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
        animado.style.opacity = 1;
        animado.classList.add("mostrarArriba");
    }
}
window.addEventListener("scroll", mostrarScroll4);

//FORMULARIO DE CONTACTO//

const formulario= document.getElementById("formContacto")
const nombre= document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const telefono= document.getElementById("telefono");
const mail= document.getElementById("mail");
const mensaje= document.getElementById("mensaje");

const regMail=/^[a-zA-Z0-9!#$%&amp;'*+\/=?^_`\{\|\}~.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*$/;

class ContactoNuevo {
    constructor(nombre, apellido,telefono, mail, mensaje) {
            (this.nombre = nombre ),
            (this.apellido = apellido),
            (this.telefono= telefono),
            (this.mail = mail),
            (this.mensaje = mensaje);
    }

}
formulario.addEventListener("submit", e=> {
    e.preventDefault();
     const url= "https://sheetdb.io/api/v1/3llrgqgwqtijy"
    //const dato= new FormData (document.getElementById('formContacto'))
  
fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        data: [
            {
                nombre: this.nombre,
                apellido: this.apellido,
                telefono: this.telefono,
                mail: this.mail,
                mensaje: this.mensaje,
            },
        ],
     })
})

//nombre, apellido, telefono, mail, mensaje
.then(res => res.json())
.then(res=> {
      console.log(res);
});

    console.log ('Formulario enviado')
    formContacto.reset ();

});

const mostrarDatos= (datos) =>{
    console.log(datos)
}


