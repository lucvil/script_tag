Shopify.Checkout.OrderStatus.addContentBox(
    '<dialog open id="exDialog"><h4>ダイアログ</h4><form method="dialog"><p>ボタンを押すとダイアログが閉じます</p><p><button type="submit">閉じる</button></p></form></dialog>'
)

var openButton = document.getElementById('openButton');
var exDialog = document.getElementById('exDialog');

openButton.addEventListener('click', function() {

    exDialog.showModal();

    // showModal() = モーダルダイアログ（周囲の領域は操作不能）
    // show() = モードレスダイアログ（周囲の領域も操作可能）

});
