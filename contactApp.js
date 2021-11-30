const campo = document.querySelector('.campo'); 
const form = document.querySelector('#formu');

let nombre = "";
campo.addEventListener("keyup", function(){
  nombre = this.value;
});
const submi = (event) => {       
     alert( `Gracias por tu mensaje ${nombre} !!`)
     event.preventDefault(); 
     form.submit()
}
 
document.addEventListener("DOMContentLoaded" , () => {

    form.addEventListener('submit', submi);
    event.preventDefault();

  });


    
