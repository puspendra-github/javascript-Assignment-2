const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color:"Grey",
    hardDisk:"256GB"

}

for (const key in productDetails){
        console.log(`${key}: ${productDetails[key]}`)
}