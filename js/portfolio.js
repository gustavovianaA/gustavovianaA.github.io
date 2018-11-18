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