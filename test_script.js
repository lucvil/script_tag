Shopify.Checkout.OrderStatus.addContentBox(
	'<dialog id="inputDialog"><form id="inputForm"><input name="city" placeholder="市区町村" required="" type="text" aria-required="true" autocomplete="shipping address-level2"><input name="address1" placeholder="住所" required="" type="text" aria-required="true" autocomplete="shipping address-line1"><input name="address2" placeholder="建物名、部屋番号など (任意)" type="text" aria-required="false" autocomplete="shipping address-line2"><button id="toConfirmButton" type="button">確認</button></form></dialog>',
	'<dialog id="confirmDialog"><form id="confirmForm" action="https://luckyvillages-sample.myshopify.com/apps/address/test" method="get"><button id="submitButton" type="button">送信</button></form></dialog>'
);		


var inputDialog = document.getElementById('inputDialog');

inputDialog.showModal();



var confirmDialog = document.getElementById("confirmDialog");
var inputForm = document.getElementById("inputForm");
var toConfirmButton = document.getElementById("toConfirmButton");


var inputFormData;
toConfirmButton.addEventListener('click',function(){
	inputFormData = new FormData(inputForm);
	console.log(inputFormData.get('city'));
	inputDialog.close();
	confirmDialog.showModal();
});


//ここまでオッケ

var confirmForm = document.getElementById("confirmForm");
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', function(){
	var sendRequest = new XMLHttpRequest();
	
	sendRequest.addEventListener('load', (event) => {
		confirmDialog.close();
	});
	
	sendRequest.addEventListener('error', (event) => {
		alert("error");
	});
	
	sendRequest.open('GET','https://luckyvillages-sample.myshopify.com/apps/address/test');
	console.log(inputFormData.get('city'));
	sendRequest.send(inputFormData);
});
