Shopify.Checkout.OrderStatus.addContentBox(
	'<dialog id="inputDialog"><form id="inputForm"><input name="city" placeholder="市区町村" required="" type="text" aria-required="true" autocomplete="shipping address-level2"><input name="address1" placeholder="住所" required="" type="text" aria-required="true" autocomplete="shipping address-line1"><input name="address2" placeholder="建物名、部屋番号など (任意)" type="text" aria-required="false" autocomplete="shipping address-line2"><button id="toConfirmButton" type="button">確認</button></form></dialog>',
	'<dialog id="confirmDialog"><form id="confirmForm" action="https://luckyvillages-sample.myshopify.com/apps/address/test" method="get"><button id="submitButton" type="submit">送信</button></form></dialog>'
);		


var inputDialog = document.getElementById('inputDialog');

inputDialog.showModal();



var confirmDialog = document.getElementById("confirmDialog");
var inputForm = document.getElementById("inputForm");
var toConfirmButton = document.getElementById("toConfirmButton");



toConfirmButton.addEventListener('click',function(){
	const inputFormData = new FormData(inputForm);
	console.log(inputFormData.get('city'));
	console.log("A");
	inputDialog.close();
	confirmDialog.showModal();
});


//ここまでオッケ

var confirmForm = document.getElementById("confirmForm");
var submitButton = document.getElementById("submitButton");

confirmForm.addEventListener('submit', function(){
	confirmDialog.close();
	return false;
});
