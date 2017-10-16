$(document).ready(function(){
    $("#CardProduct").hide();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/xml/user/"
    }).done(function(data){
        $.each(data,function(index, obj){
            $('#CardProduct').clone().appendTo('.SectionProducts');
            var divProduct = $('#CardProduct').last();
            divProduct.attr('id',obj['code']);
            divProduct.find('.name span').html(obj['name']);
            divProduct.show();
        });

        $('.BtnDelete').click(function(){
            var code = $(this).parents('.Product').attr('id');
            var div = $(this).parents('.Product');
            $.ajax({
                type: "DELETE",
                dataType: "text",
                url: "/api/user/"+code
            }).done(function(data){
                if(data === "Deletado com sucesso!"){
                    alert(data);
                    div.hide();
                }
            });
        });
        
        $('.BtnEdit').click(function(){
             var code = $(this).parents('.Product').attr('id');
             var name = $(this).parents('.Product').find('.name span').html();
             window.location.assign("http://localhost:3000/public/atualizar_usuario.html?code="+code+"&name="+name);
        });
    });
});
