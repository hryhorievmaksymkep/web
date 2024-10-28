let orders = [
    {
        orderId: 1,
        customer: {name: "Іван", email: "ivan2012@gmail.com"},
        items: ["чипси Lays", "помідори 200г", "пиво Львівське світле 0.5л"],
        total: 100.67
    },
    {
        orderId: 2,
        customer: {name: "Денис", email: "deniska@gmail.com"},
        items: ["сірники", "малий пакет", "крабові палички"],
        total: 88.33
    }
];

function getTotalSpentByCustomer(){
    let name = prompt("Введіть ім'я покупця:");
    let customer = orders.filter(order => order.customer.name === name);
    let totalspent = customer.reduce((total, order) => total + order.total, 0);
    alert(totalspent)
}

getTotalSpentByCustomer();