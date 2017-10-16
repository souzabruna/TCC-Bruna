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

var code = getUrlParameter('code');
var name = getUrlParameter('name');
var cnpj = getUrlParameter('cnpj');
var endereco = getUrlParameter('endereco');
var telefone = getUrlParameter('telefone');
var email = getUrlParameter('email');

$(document).ready(function(){
    $('#code').val(code);
    $('#name').val(name);
    $('#cnpj').val(cnpj);
    $('#endereco').val(endereco);
    $('#telefone').val(telefone);
    $('#email').val(email);
    $('.btnUpdate').click(function(){
        code = $('#code').val();
        name = $('#name').val();
        cnpj = $('#cnpj').val();
        endereco = $('#endereco').val();
        telefone = $('#telefone').val();
        email = $('#email').val();
        $.ajax({
              type: "PUT",
              dataType: "text",
              url: "/api/fornecedor/"+code+"/"+name+"/"+cnpj+"/"+endereco+"/"+telefone+"/"+email
        }).done(function(data){
              alert(data);
              window.location.assign("http://localhost:3000/public/listar_fornecedores.html");
        });
    });
});

