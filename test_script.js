// 日本語が入っているかを確認
function notIncludeJa(text) {
	try {
	    let gmi = 'gmi';
	    let regeIncludeHiragana = '^(?=.*[\u3041-\u3096]).*$';
	    let regeIncludeKatakana = '^(?=.*[\u30A1-\u30FA]).*$';
	    let regeIncludeKanji = '^(?=.*[\u4E00-\u9FFF]).*$';
	    let regeHiragana = new RegExp(regeIncludeHiragana, gmi);
	    let regeKatakana = new RegExp(regeIncludeKatakana, gmi);
	    let regeKanji = new RegExp(regeIncludeKanji, gmi);

	    let notIncludeJa = true;
	    if (regeHiragana.test(text)){
		notIncludeJa = false;
		console.log("hiragana");
	    }
	    if (regeKatakana.test(text)){
		notIncludeJa = false;
		console.log("katakana");
	    }
	    if (regeKanji.test(text)){
		notIncludeJa = false;
		console.log("kanji");
	    }

	    return notIncludeJa;
	} catch (error) {
	    alert(error);
	}
}





if(window.Shopify.checkout.billing_address.country_code  == "JP" && notIncludeJa(window.Shopify.checkout.billing_address.city + window.Shopify.checkout.billing_address.address1)) {
	Shopify.Checkout.OrderStatus.addContentBox(
		'<dialog id="inputDialog"><form id="inputForm"><input type="hidden" name="order_id" value=' + window.Shopify.checkout.order_id + '><input name="city" placeholder="市区町村" required="" type="text" aria-required="true" autocomplete="shipping address-level2"><input name="address1" placeholder="住所" required="" type="text" aria-required="true" autocomplete="shipping address-line1"><input name="address2" placeholder="建物名、部屋番号など (任意)" type="text" aria-required="false" autocomplete="shipping address-line2"><button id="toConfirmButton" type="button">確認</button></form></dialog>',
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

		const sendToUrl = 'https://luckyvillages-sample.myshopify.com/apps/address/test?' + 'city=' + inputFormData.get('city') + '&address1=' + inputFormData.get('address1') + '&address2=' + inputFormData.get('address2') + '&order_id=' + inputFormData.get('order_id');

		sendRequest.open('GET',sendToUrl);
		console.log(inputFormData.get('city'));
		sendRequest.send(inputFormData);
	});
}
