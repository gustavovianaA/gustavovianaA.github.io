$(document).ready(function(){
	
$(".nav-link").click(function(){

var id = $(this).attr("id");

switch(id){
case 'conhecimento':
id = '1';
break;
case 'formacao':
id = '2';
break;
case 'portfolio':
id = '3';
break;	
}

mudar(id);

function mudar(id){

$(".atual").removeClass("atual");
$("#" + id).addClass("atual");
$("#" + id).show().css("opacity","0").animate({opacity: "1"},500 );


}

});


$(".menu_conteudo").mouseover(function(){

//$(this).css("backgroundColor"," #d93f42");
$(this).find('.nav-link').css("color"," #d93f42");

});


$(".menu_conteudo").mouseout(function(){

//$(this).css("backgroundColor","transparent");
$(this).find('.nav-link').css("color","#fff");

});

$(".nav-link").click(function(){

$(".controles").show();

if($(".atual").attr("id") == 1){
$("#back").hide();	
}else if($(".atual").attr("id") == 3){
$("#next").hide();
}

});

});