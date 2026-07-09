
// for(let i=0;i<5;i++){
//     console.log(i)
// }


// let ispasswordcorrect=false

// while(!ispasswordcorrect){

//     console.log("Enter pin")

//     ispasswordcorrect=true


// }

//for of -> arrays

// let items=["phone","laptop","camera"]

// for(let i=3;i<4;i++){
//     console.log(items[i])
// }


// const products = [
//   {
//     id: 1,
//     name: "iPhone 16",
//     price: 79999,
//     category: "Mobile"
//   },
//   {
//     id: 2,
//     name: "Samsung TV",
//     price: 45999,
//     category: "Electronics"
//   },
//   {
//     id: 3,
//     name: "Nike Shoes",
//     price: 6999,
//     category: "Footwear"
//   }
// ];


// for(const gadget of products){
//     // console.log(gadget.name)
//     // console.log(gadget.price)
//     // <div>
//     //     <h1>gadget.name</h1>
//     //     <p>gadget.price</p>
//     // </div>
// }

//for in ->objects

// let details={
//     name:"Shanmukh",
//     bike:"husqy",
//     city:"Delhi"
// }


// for(let key in details){
//     console.log(key)
// }

//name
//bike
//city
// for(let key in details){
//     console.log(key,details.key)
// }
//Shanmukh
//Husqy
//Delhi


// const products = [
//   {
//     id: 1,
//     name: "iPhone 16",
//     price: 79999,
//     category: "Mobile"
//   },
//   {
//     id: 2,
//     name: "Samsung TV",
//     price: 45999,
//     category: "Electronics"
//   },
//   {
//     id: 3,
//     name: "Nike Shoes",
//     price: 6999,
//     category: "Footwear"
//   }
// ];


//only for arrays
// products.forEach(function(shanmukh,index){

//    console.log(shanmukh.name,index)

// })
//map

// let prices=[100,200,300]
// let updated=[]

// for(i=0;i<prices.length;i++){
//     updated.push(prices[i]+10)
// }

// console.log(updated)
// let updated=prices.map((price,index)=> price+10 )

// console.log(updated)


// const Shanmukh = function(){
//     console.log("hello")
// }


// Shanmukh()


// const Praveen=() => {
//     return "hello"
// }

// Praveen()


//oneliner
// const Praveen=() => "hello"

const products = [
  {
    id: 1,
    name: "iPhone 16",
    price: 79999,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Samsung TV",
    price: 45999,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Nike Shoes",
    price: 6999,
    category: "Footwear"
  }
];

// for(const gadget of products){
//     if(gadget.price > 10000){
//         console.log(gadget.name,gadget.price,gadget.category)
//     }
// }

// const productsgreaterthan10000=products.filter((gadget)=> gadget.price > 10000 && gadget.price<50000)
// console.log(productsgreaterthan10000)

// const electronicsfilter=products.filter((product)=> product.category=="Electronics")
// console.log(electronicsfilter)

// const electronics=products.find((product)=> product.category=="Electronics")
// console.log(electronics)

// let nums=[1,2,3]
// let totalnums=nums.reduce((sum,num)=> sum+num,0)  //sum=0,num=1 =>1=sum  //1+2=3=sum /// 3+3==sum=6
// console.log(totalnums)
