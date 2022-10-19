 Shopify.Checkout.OrderStatus.addContentBox(
   'タイトル',
   `<p>希望配送日時は</p>
    <p>{{ attributes['配送希望日'] | date: "%Y年%m月%d日" }}の{{ attributes['配送時間帯'] }}です。</p>
   `,
   `
   <b>入会特典！1000円クーポンプレゼント中！</b><br>
   <a href="/account/register">会員登録はこちら</a>
   `
 )
