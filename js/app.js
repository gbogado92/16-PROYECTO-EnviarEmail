

//  Variables 
const BtnEnviar = document.querySelector('#enviar');

eventListeners();
//  Cuando la app arranca 
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //  Campos del formulario 
    email.addEventListener('blur', validarFormulario);
}

//  Funciones 

function iniciarApp() {
   BtnEnviar.disabled = true;
   BtnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}
//  Valida el formulario 
function validarFormulario(e) {
    if(e.target.value.length) {
        console.log('Si hay algo');
    } else {
        e.target.style.borderBottomColor = 'red';
    }
}