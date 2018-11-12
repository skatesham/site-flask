$(function(){


    // Função para ativar o botão do NavBar
    var title = $('title').text();
    $('.nav-link').each(function(){
        var name = $(this).text();
        if(title === name){
            $(this).removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
        
    })
});