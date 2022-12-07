Shopify.Checkout.OrderStatus.addContentBox(
		'<dialog id="exDialog"><form><input name="city" required type="text" aria-required="true" autocomplete="shipping address-level2" placeholder="市区町村"></form></dialog>'
)


var exDialog = document.getElementById('exDialog');
exDialog.showModal();

