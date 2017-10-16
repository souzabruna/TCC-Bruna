$(document).ready(function(){
    $("#CardProduct").hide();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/product/"
    }).done(function(data){
        $.each(data,function(index, obj){
        $('#CardProduct').clone().appendTo('.SectionProducts');
            var divProduct = $('#CardProduct').last();
            divProduct.attr('id',obj['code']);
            divProduct.find('.name span').html(obj['name']);
            divProduct.find('.price span').html(obj['price']);
            divProduct.find('.description span').html(obj['description']);
            divProduct.show();
        });//FIM DO AJAX

        $('.BtnDelete').click(function(){
            var code = $(this).parents('.Product').attr('id');
            var div = $(this).parents('.Product');
            $.ajax({
                type: "DELETE",
                dataType: "text",
                url: "/api/product/"+code
            }).done(function(data){ 
                alert(data);
                if(data === "Deletado com sucesso!"){
                  console.log("cheguei");
                    div.hide();
                }
                });//FIM DO AJAX
        });
        
        $('.BtnEdit').click(function(){
             var code = $(this).parents('.Product').attr('id');
             var name = $(this).parents('.Product').find('.name span').html();
             var price = $(this).parents('.Product').find('.price span').html();
             var description = $(this).parents('.Product').find('.description span').html();
             window.location.assign("http://localhost:3000/public/atualizar_produto.html?code="+code+"&name="+name+"&price="+price+"&description="+description);

        });
    });
});
