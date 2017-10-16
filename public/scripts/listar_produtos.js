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
            divProduct.find('.code span').html(obj['code']);
            divProduct.find('.name span').html(obj['name']);
            divProduct.find('.price span').html(obj['price']);
            divProduct.find('.quantidade span').html(obj['quantidade']);
            divProduct.find('.categoria span').html(obj['categoria']);
            divProduct.find('.description span').html(obj['description']);
            divProduct.show();
        });

        $('.BtnDelete').click(function(){
            var code = $(this).parents('.Product').attr('id');
            var div = $(this).parents('.Product');
            $.ajax({
                type: "DELETE",
                dataType: "text",
                url: "/api/product/"+code
            }).done(function(data){
                if(data === "Deletado com sucesso!"){
                  $('#modsus').toggle('is-toggle');
                  div.hide();
                }
            });
        });

        $('.BtnSearch').click(function(){
            var categoria = $('#cat').val();
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "/api/product/cat/"+categoria
            }).done(function(data){
                $.each(data,function(index, obj){
                    $('#CardProduct').clone().appendTo('.SectionProducts');
                    var divProduct = $('#CardProduct').last();
                    divProduct.attr('id',obj['code']);
                    divProduct.find('.code span').html(obj['code']);
                    divProduct.find('.name span').html(obj['name']);
                    divProduct.find('.price span').html(obj['price']);
                    divProduct.find('.description span').html(obj['description']);
                    divProduct.show();
                }); 
            });
        });
        
        $('.BtnEdit').click(function(){
             var code = $(this).parents('.Product').attr('id');
             var name = $(this).parents('.Product').find('.name span').html();
             var price = $(this).parents('.Product').find('.price span').html();
             var description = $(this).parents('.Product').find('.description span').html();
             window.location.assign("http://localhost:3000/public/atualizar_produto.html?code="+code+"&name="+name+"&price="+price+"&description="+description);
        }); //fim BtnEdit

        $('.headerCard').click(function(){
	    		 $(this).parents('.Product').find('.ProductMore').toggle('is-toggle');
			  });
    });
});

$('.bts').click(function(){
    $('#modsus').toggle('is-toggle');
});