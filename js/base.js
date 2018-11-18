$(document).ready(function(){

//Mudar o layout no portfolio e depois voltar ao normal

  function layout_change(){

    
    $("#sem_info").removeClass("col-lg-9");
    $("#sem_info").removeClass("col-12");
    $("#sem_info").addClass("col-11");

  $("#my_info").removeClass("col-lg-3   justify-content-center pt-lg-0");
  $("#my_info").addClass("justify-content-end    col-lg-10 pt-lg-4");
  


    $(".sobre_titulo").addClass("col-12 ");
   
      


}

function layout_return(){

    $("#sem_info").addClass("col-lg-9");
    $("#sem_info").removeClass("col-11");
    $("#sem_info").addClass("col-12");

  $("#my_info").removeClass(" col-lg-10 justify-content-end pt-lg-4");
  $("#my_info").addClass("col-lg-3  mx-auto justify-content-center pt-lg-0");

    $(".sobre_titulo").removeClass("col-12");
    


}

$("#next").click(function(){

if($(".atual").attr("id") == 2){

    layout_change();
}else{
    layout_return();
    }

});

$("#back").click(function(){

layout_return();

});

$("#conhecimento").click(function(){
layout_return();
})
$("#formacao").click(function(){
layout_return();
})
$("#portfolio").click(function(){
layout_change();
})


//----------------

$(".site_conteudo").hide();

setTimeout(function(){
$(".site_conteudo").fadeIn();
$("body").css("backgroundColor","#d1d6e0");
$(".footer").show();

} , 1200)

var count = 0;

function initial_anim(){
 var w = $(".initial_anim").width(); 
$(".initial_anim").css("width", w-2);   
 var h = $(".initial_anim").height(); 
$(".initial_anim").css("height", h-2); 

if(count < 1100)
setTimeout(initial_anim,10);
else
$(".initial_anim").hide();
count += 10;
}

setTimeout(initial_anim,10);



	
$("#next").click(function(){



if( $(".atual").attr("id") < 3){



var id = parseInt($(".atual").attr("id")) + 1;

$(".atual").removeClass("atual");
$("#" + id).addClass("atual");

$("#" + id).show().css("opacity","0").animate({opacity: "1"},500 );
}



if($(".atual").attr("id") == 3){
$("#next").hide();	
}else{
$(".controles").show();	
}

});


$("#back").click(function(){

if( $(".atual").attr("id") >1 ){

var id = parseInt($(".atual").attr("id")) - 1;

$(".atual").removeClass("atual");
$("#" + id).addClass("atual");

$("#" + id).show().css("opacity","0").animate({opacity: "1"},500 );
;
}


if($(".atual").attr("id") == 1){
$("#back").hide();	
}else{
$(".controles").show();	
}

});

var lastScrollTop = 0;

$(window).scroll(function(event){

 

var controles = $(".controles").offset().top + $(".controles").outerHeight();
var footer = $(".footer").offset().top;

if(controles > footer){
 $(".controles").css("visibility","hidden"); 
}else{
  $(".controles").css("visibility","visible"); 
}

console.log("controle"+controles+"footer"+footer);


   var st = $(this).scrollTop();
   
   if (st > lastScrollTop){
       var soma = parseInt($(".controles").css("top")) + (st - lastScrollTop);
       $(".controles").css("top", soma + "px") ;
   } else {
      var soma = parseInt($(".controles").css("top")) - (lastScrollTop - st);
       $(".controles").css("top", soma + "px") ;
   }
   lastScrollTop = st;
   
});




/*
$(".img-con").mouseover(function(){

$(this).animate({borderWidth: "6px"},100);

});*/

});