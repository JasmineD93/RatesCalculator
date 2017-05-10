//Global Variables 
// var rateName = $('input[name="expertRateName"]').val();
// var rateAmount = parseFloat($('input[name="expertRateAmount"]').val());
// var imsRate = parseFloat($('input[name="rate"]').val());
// var markup = parseFloat($('input[name="markup"').val());
// var totalBilling = rateAmount + imsRate + markup;
var hours = parseFloat($('input[name="hours"]').val());

// var rateinfo = {
// 	rateName: rateName,
// 	rateAmount: rateAmount,
// 	imsRate: imsRate,
// 	markup: markup,
// 	totalBilling: totalBilling
// };

//Exper Rate hourly billing
$("#billing").on("click",function(event){
	
	var rateName = $('input[name="expertRateName"]').val();
	var rateAmount = parseFloat($('input[name="expertRateAmount"]').val());
	var imsRate = parseFloat($('input[name="rate"]').val());
	var markup = parseFloat($('input[name="markup"').val());
	var totalBilling = rateAmount + imsRate + markup;

	$('input[name="expertRateName"]').val("");
	$('input[name="expertRateAmount"]').val("");
	$('input[name="markup"]').val("");
	$('input[name="rate"]').val("");


// 	var rateInfo = {
// 	rateName: rateName,
// 	rateAmount: rateAmount,
// 	imsRate: imsRate,
// 	markup: markup,
// 	totalBilling: totalBilling
// };

	$("#tableRate tr:last").before("<tr><td>" + rateName + "</td><td>" + "$" + rateAmount + "</td><td>" + "$" + markup + "</td><td>" + "$" + imsRate + "</td><td><span><i class='fa fa-times-circle fa-lg'></i></span>" + 
		"</td><td>" + "$" + totalBilling + "/hr" + "</td></tr>");
});

//Expert Total amount billed




//Click on x to delete row
$("#tableRate").on("click","span",function(){
	$(this).closest("tr").remove();
});


// var hours = parseFloat($('input[name="hours"]').val());
// $('input[name="hours"]').val("");