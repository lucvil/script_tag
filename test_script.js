 try {
var items = [];
{% for line_item in cart.items %}
items.push({
  item_id: '{{line_item.sku}}',
  name: '{{line_item.title}}',
  price: '{{line_item.final_price}}' ? Number('{{line_item.final_price}}')/100 : null,
  quantity: '{{line_item.quantity}}' ? Number('{{line_item.quantity}}') : null,
  item_image_url: '{{line_item.image}}',
  item_url: '{{line_item.url}}',
  item_brand: '{{line_item.vendor}}',
});
{% endfor %}
var item_ids = items.map( function(item) { return item.item_id; });
var item_names = items.map( function(item) { return item.name; });
var item_prices = items.map( function(item) { return item.price; });
var item_quantities = items.map( function(item) { return item.quantity; });
var item_image_urls = items.map( function(item) { return item.item_image_url; });
var item_urls = items.map( function(item) { return item.item_url; });
var item_brands = items.map( function(item) { return item.item_brand; });
tracker.track('cart', {
  price: '{{cart.items_subtotal_price}}' ? Number('{{cart.items_subtotal_price}}')/100 : null,
  quantity: '{{cart.item_count}}' ? Number('{{cart.item_count}}') : null,
  status: '{{cart.item_count}}' ? Number('{{cart.item_count}}')>0 : null,
  item_ids: item_ids,
  item_names: item_names,
  item_prices: item_prices,
  item_quantities: item_quantities,
  item_image_urls: item_image_urls,
  item_urls: item_urls,
  item_brands: item_brands,
  items: items,
});
} catch(e) {
if ('tracker' in window) {
  tracker.track('_error', {
      message: e.message
  });
}
}
