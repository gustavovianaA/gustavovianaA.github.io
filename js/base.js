$(document).ready(function(){

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