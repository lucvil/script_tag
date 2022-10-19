// try {
//     tracker.user({
//         user_id: '{{customer.id}}',
//         email: '{{customer.email}}',
//         name: '{{customer.name}}',
//         first_name: '{{customer.first_name}}',
//         last_name: '{{customer.last_name}}',
//         subscription: '{{customer.accepts_marketing}}' ? Boolean('{{customer.accepts_marketing}}') : null,
//         has_account: '{{customer.has_account}}' ? Boolean('{{customer.has_account}}') : null,
//         phone: '{{customer.phone}}',
//         tax_exempt: '{{customer.tax_exempt}}' ? Boolean('{{customer.tax_exempt}}') : null,
//         orders_count: '{{customer.orders_count}}' ? Number('{{customer.orders_count}}') : null,
//         total_spent: '{{customer.total_spent}}' ? Number('{{customer.total_spent}}') : null
//     });
// } catch(e) {
//     if('tracker' in window) {
//         tracker.track('_error', {
//             message: e.message
//         });
//     }
// }
// console.log(customer.email);
<script>
  Shopify.Checkout.OrderStatus.addContentBox(
    'タイトル',
    {%- comment -%} cart.attributesがあれば {%- endcomment -%}
    {% if attributes %}
      {% if attributes['配送日の指定'] == "指定する" %}
        `<p>希望配送日時は</p>
         <p>{{ attributes['配送希望日'] | date: "%Y年%m月%d日" }}の{{ attributes['配送時間帯'] }}です。</p>
        `,
      {% endif %}
    {% endif %}

    {%- comment -%} 入会への案内 {%- endcomment -%}
    `
    <b>入会特典！1000円クーポンプレゼント中！</b><br>
    <a href="/account/register">会員登録はこちら</a>
    `
  )
</script>
