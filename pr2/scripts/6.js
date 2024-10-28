let products = [
    {productId: 1, name: "Львівське Різдвяне", price: 30.21},
    {productId: 2, name: "Борошно Хуторок", price: 100.42}
];

let purchases = [
    {purchaseId: 1, productId: 1, quantity: 6},
    {purchaseId: 2, productId: 2, quantity: 2}
];

function getTotalSales(){
    let sum = [];

    purchases.forEach(purchase => {
        let product = products.find(p => p.productId === purchase.productId)
        if(product){
            sum.push({productName: product.name, price: product.price*purchase.quantity}); 
        }
    });
    alert("Обчислення успішне")
    console.log(sum);
}

getTotalSales();