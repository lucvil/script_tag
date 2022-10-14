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
console.log(customer.email);
