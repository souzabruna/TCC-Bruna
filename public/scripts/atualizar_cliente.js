 var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var id = getUrlParameter('id');
var nome = getUrlParameter('nome');
var aniversario = getUrlParameter('aniversario');
var endereco = getUrlParameter('endereco');
var telefone = getUrlParameter('telefone');
var email = getUrlParameter('email');

$(document).ready(function(){
    $('#id').val(id);
    $('#nome').val(nome);
    $('#aniversario').val(aniversario);
    $('#endereco').val(endereco);
    $('#telefone').val(telefone);
    $('#email').val(email);

    $('.btnUpdate').click(function(){
        id = $('#id').val();
        nome = $('#nome').val();
        aniversario = $('#aniversario').val();
        endereco = $('#endereco').val();
        telefone = $('#telefone').val();
        email = $('#email').val();
        $.ajax({
              type: "PUT",
              dataType: "text",
              url: "/api/cliente/"+id+"/"+nome+"/"+aniversario+"/"+endereco+"/"+telefone+"/"+email
        }).done(function(data){
              alert(data);
              window.location.assign("http://localhost:3000/public/listar_clientes.html");
        });

    }); 
});