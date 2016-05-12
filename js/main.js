$(document).ready(function(){
	var array=["","#myid",".myclass","*",".myclass","code,#myid,.myclass","li > ul","strong + em","strong ~ em","li:first","li:last","li:not(li:first)","li:even","li:odd","li:eq(1)","li:gt(2)","li:lt(2)",":header",":animated","li:contains(second-level)",":empty","li:has(a)","p:parent",":hidden",":visible","li[class]","a[rel=\"self\"]","a[rel!=\"nofollow\"]","[class^=\"my\"","a[title\$=\"blog\"]","a[href*=\"zip\"]","a[rel][href][title\$=\"blog\"]","li:nth-child(even)","li:nth-child(odd)","li:nth-child(2)","li:nth-child(2n)","li:first-child","li:last-child","code:only-child",":input",":text",":password",":radio",":checkbox",":submit",":image",":reset",":button",":file",":hidden","input:enabled",":disabled",":checked",":selected"];
	var j=0;
	$('#valor').val(array[j]);
	$(array[j]).addClass('mf_10');

	$('#siguiente').click(function(){
		$(array[j]).removeClass('mf_10');
		if(array.length==j){
			j=0;
		} else {
			j+=1;
		}
		$('#valor').val(array[j]);
		$(array[j]).addClass('mf_10');
	});
	$('#anterior').click(function(){
		$(array[j]).removeClass('mf_10');
		j-=1;
		$('#valor').val(array[j]);
		$(array[j]).addClass('mf_10');
	});
});

	// $("#siguiente").click(function(){
	// 	var string=$("#valor").val();
	// 	 $(string).addClass('mf_10');
	// });