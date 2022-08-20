$(document).ready(function(){
      $('.sidenav').sidenav();

      $( "#mensaje" ).click(function() {
            alertify.success('Mensaje Enviado Exitosamente');
          });
   });