Shopify.Checkout.OrderStatus.addContentBox(
	'<dialog id="inputDialog"><form id="inputForm"><input name="city" placeholder="市区町村" required="" type="text" aria-required="true" autocomplete="shipping address-level2"><input name="address1" placeholder="住所" required="" type="text" aria-required="true" autocomplete="shipping address-line1"><input name="address2" placeholder="建物名、部屋番号など (任意)" type="text" aria-required="false" autocomplete="shipping address-line2"><button id="toConfirmButton" type="button">確認</button></form></dialog>',
	'<dialog id="confirmDialog" action="https://luckyvillages-sample.myshopify.com/apps/address/test" method="get"><form id="confirmForm"><button id="submitButton" type="button">送信</button></form></dialog>'
);		


var inputDialog = document.getElementById('inputDialog');

inputDialog.showModal();



var confirmDialog = document.getElementById("confirmDialog");
const inputForm = document.getElementById("inputForm");
const toConfirmButton = document.getElementById("toConfirmButton");

//ここまでオッケ

toConfirmButton.addEventListener('click',function(){
  const inputFormData = new FormData(inputForm);
  console.log(inputFormData);
  inputDialog.close();
  confirmDialog.showModal();
};




// const confirmForm = document.getElementById("confirmForm");
// const submitButton = document.getElementById("submitButton");

// submitButton.addEventListener('click', function(){
//   const confirmFormData = new FormData(confirmForm);
//   const confirmAction = confirmForm.getAttribute("action");
//   const options = {
//     method: 'GET',
//     body: confirmFormData,
//   }
//   fetch(action, options).then((e) => {
//     if(e.status === 200) {
//       alert("保存しました。");
//       return;
//     }else{
//       alert("保存できませんでした。");
//       return;
//     }
// });
