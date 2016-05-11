$(document).ready(function(){
	var array=["","#myid",".myclass","*","code.#myid",".myclass","code,#myid,"];

	$("#siguiente").click(function(){
		var string=$("#valor").val();
		 $(string).addClass('mf_10');
	});
	$('#anterior').click(function(){
		var string=$("#valor").val();
		$(string).removeClass('mf_10');
	});
});