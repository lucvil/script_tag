Shopify.Checkout.OrderStatus.addContentBox(
    '<h2>YOUR TITLE HERE{{checkout.shipping_address.country_code }}</h2>',
    '<p>YOUR MESSAGE HERE</p>'
)

let order_id = window.Shopify.order.id
console.log(order_id)
