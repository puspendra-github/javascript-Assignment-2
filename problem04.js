const products= [
    {
        name:"laptop",
        price: 120000
    },
    {
        name:"Mobile",
        price: 70000
    },
    {
        name:"laptop bag",
        price: 2000
    },
    {
        name:"Watch",
        price: 2000
    },
    {
        name:"Mobile Charger",
        price: 1500
    },
];

let maxPrice = {
    name:"",
    price:0
}
let minPrice = {
    name:"", price: Number.MAX_VALUE
}

for (const product of products){
    if(product.price>maxPrice.price){
    maxPrice=product
    }

if(product.price < minPrice.price){
    minPrice = product
    }
}

console.log(`The product with maximum amount is ${maxPrice.name} which is priced at Rs. ${maxPrice.price}`)

console.log(`The product with minimum amount is ${minPrice.name} which is priced at Rs. ${minPrice.price}`)


// Output

// The product with maximum amount is laptop which is priced at Rs. 120000
// The product with minimum amount is Mobile Charger which is priced at Rs. 1500