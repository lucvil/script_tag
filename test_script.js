{% if checkout.shipping_address.country_code == 'JP' %}
    Shopify.Checkout.OrderStatus.addContentBox(
    '<h2>YOUR TITLE HERE</h2>',
    '<p>YOUR MESSAGE HERE</p>'
    )
{% endif %}
