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
var price = getUrlParameter('price');
var description = getUrlParameter('description');

$(document).ready(function(){
    $('#code').val(code);
    $('#name').val(name);
    $('#price').val(price);
    $('#description').val(description);

    $('.btnUpdate').click(function(){
        code = $('#code').val();
        name = $('#name').val();
        price = $('#price').val();
        description = $('#description').val();
        $.ajax({
              type: "PUT",
              dataType: "text",
              url: "/api/product/"+code+"/"+name+"/"+price+"/"+description
        }).done(function(data){
             window.location.assign("http://localhost:3000/public/listar_produto.html");
        });
  });
});
