

//  Variables 
const BtnEnviar = document.querySelector('#enviar');

// Variables para campos 
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
    //  Cuando la app arranca 
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //  Campos del formulario 
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

//  Funciones 

function iniciarApp() {
   BtnEnviar.disabled = true;
   BtnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//  Valida el formulario 
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        console.log('Si hay algo');
    } else {
        e.target.classList.add('border', 'border-red-500');
    }
}