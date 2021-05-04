

//  Variables 
const BtnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

//  Funciones 

function iniciarApp() {
   BtnEnviar.disabled = true;
   BtnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}