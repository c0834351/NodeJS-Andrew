//normal coding
// const name ="andrew"
// const userAge = 27
// const region = 'telanga'

// const user = {
//     name: name,
//     age: userAge,
//     region: 'tamilnadu'
// }
// console.log(user);


//object property shorthand
// const name ="andrew"
// const userAge = 27
// const region = 'telanga'

// const user = {
//     name,
//     age: userAge,
//     region: 'tamilnadu'
// }
// console.log(user);

//normal coding
const product = {
    label: 'santoor',
    price: 23.33,
    quantity: 283,
    stockPrice: undefined,
    rating: 4.2
}
// const label = product.label
// const quantity = product.quantity

//object destructing
// const {quantity, rating = 5, label: productLabel} = product
// console.log(productLabel);
// console.log(quantity);
// console.log(rating);


//normal coding
// const transaction = (type, myProduct)=>{
//     console.log(type);
//     console.log(myProduct);
// }
// transaction('order making', product)

//destructing function arguments
const transaction = (type, {label, quantity, price})=>{
    console.log(type);
    console.log(label,quantity,price);
}
transaction('order making', product)