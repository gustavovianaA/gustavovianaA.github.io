$(document).ready(function(){
	
var livros = $(".livros_control");
var lStatus = $(".livros_status");
var lLista = $(".livros_lista");

livros.click(function(){

//alert(livros_status.html());

if(lStatus.html() == '+'){
lLista.show();
lStatus.html("-");
}else{
lLista.hide();
lStatus.html("+");	
}


});

});