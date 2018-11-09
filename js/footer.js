$(document).ready(function(){
	

$(".footer_links").hide(); 

function display_1(){
	$(".footer_links").eq(1).fadeIn();
	setTimeout(display_2,400);	
}

function display_2(){
	$(".footer_links").eq(2).fadeIn();
	setTimeout(display_3,400);	
}

function display_3(){
	$(".footer_links").eq(3).fadeIn();
	
}

$(window).scroll(function() {
   var hT = $('.footer').offset().top,
       hH = $('.footer').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

       console.log(hT+hH-wH);
   if (wS > (hT+hH-wH) -10){
   		$(".credits").show();
   	$(".footer_links").eq(0).fadeIn()
   	setTimeout(display_1,400);
   }
     
 
});

$(".footer_links").mouseenter(function(){

$(".footer_links_all").css("border-top-color","#d93f42");

});

$(".footer_links").mouseleave(function(){

$(".footer_links_all").css("border-top-color","#667899");

});



});