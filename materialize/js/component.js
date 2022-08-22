$(document).ready(function(){
      $('.sidenav').sidenav();

      $('#enviar').on('click',enviarMensaje);
   });


   
   async function enviarMensaje(){
      var formu = document.getElementById("formu");
      var boton2 = document.getElementById("enviar");
      boton2.disabled = true;
      const form = new FormData(formu);
      const response = await fetch("https://formspree.io/f/xjvzkbvb", {
            method: formu.method,
            body: form,
            headers: {
              'Accept': 'application/json'
            }
          })
          if(response.ok) {
            formu.reset()
            alertify.success('Mensaje Enviado Exitosamentee');
          }
     
   }