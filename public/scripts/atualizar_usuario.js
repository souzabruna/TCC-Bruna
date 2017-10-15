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

$(document).ready(function(){
    $('#code').val(code);
    $('#name').val(name);

    $('.btnUpdate').click(function(){
        code = $('#code').val();
        name = $('#name').val();
        $.ajax({
              type: "PUT",
              dataType: "text",
              url: "/api/user/"+code+"/"+name
        }).done(function(data){
              alert(data);
              window.location.assign("http://localhost:3000/public/listar_usuarios.html");
      });

    });
});