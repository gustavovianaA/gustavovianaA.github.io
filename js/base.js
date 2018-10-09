$(document).ready(function(){


	
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