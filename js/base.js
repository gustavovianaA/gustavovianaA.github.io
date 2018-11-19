$(document).ready(function(){


  MathJax.Hub.Config({
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      processEscapes: true
    },
    "HTML-CSS": { fonts: ["TeX"] }
  });


//Mudar o layout no portfolio e depois voltar ao normal

  function layout_change(){

    
  $("#sem_info").removeClass("col-lg-9 ");


  $("#my_info").removeClass("col-lg-3   justify-content-center pt-lg-0");
  $("#my_info").addClass("justify-content-end    col-lg-10 pt-lg-4");
  
  $(".sobre_titulo").addClass("col-12 ");

  if($(window).width() > 580){
  $(".controles").css("width","60%");  
  }


   
      


}

function layout_return(){

    $("#sem_info").removeClass("col-11");
    $("#sem_info").addClass("col-lg-9");

    $("#my_info").removeClass(" col-lg-10 justify-content-end pt-lg-4");
    $("#my_info").addClass("col-lg-3  mx-auto justify-content-center pt-lg-0");

    $(".sobre_titulo").removeClass("col-12");

     $(".controles").css("width","80%");

}


$("#next").click(function(){

if($(".atual").attr("id") == 2){

    layout_change();
}

});

$("#back").click(function(){



if($(".atual").attr("id") == 3){

layout_return();
}

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

} , 4000);

var count = 0;

function initial_anim(){
 
 slogan_string = "Gustavo Viana Desenvolvedor"

$(".initial_anim h1").append(slogan_string[count+1])

if(count < slogan_string.length){
setTimeout(initial_anim,80);}
else if (count == slogan_string.length){ 

$(".initial_anim h1").append("<span id=web> </span>");
$("#web").html(" WEB")  

setTimeout(function(){
$(".initial_anim ").hide();  
},1700);

}


count += 1;



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

$('#next').attr('src','img/direita_off.png');
$('#next').css("border-left", "3px solid #9E9E9E");
}else{
$('#next').css("border-left", "3px solid #d93f42");
$('#next').attr('src','img/direita.png');

$('#back').css("border-right", "3px solid #d93f42");
$('#back').attr('src','img/esquerda.png');


	
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
$('#back').attr('src','img/esquerda_off.png');
$('#back').css("border-right", "3px solid #9E9E9E");
}else{
$('#back').css("border-right", "3px solid #d93f42");
$('#back').attr('src','img/esquerda.png');

$('#next').css("border-left", "3px solid #d93f42");
$('#next').attr('src','img/direita.png');
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







});