function layout_change(){

    
    $("#sem_info").removeClass("col-lg-9");
	$("#my_info").removeClass("col-lg-3 col-10 mx-auto justify-content-center pr-lg-4  ");
	$("#my_info").addClass("row pl-3 justify-content-end pr-lg-3 pt-4 ");
	$("#my_info").css("margin-left" , "7%");

	$(".sobre_titulo").removeClass("mb-lg-3");
    $(".sobre_titulo").addClass("col-12");
   
      


}

function layout_return(){

    $("#sem_info").addClass("col-lg-9");
	$("#my_info").removeClass("row  pl-3 justify-content-end pt-4");
	$("#my_info").addClass("col-lg-3 col-10 mx-auto justify-content-center");

    $(".sobre_titulo").removeClass("mt-lg-3 col-12");
    $(".sobre_titulo").addClass("mb-lg-3");	


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