// let stu1="Aman"
// let stu2="Bharat"
// let stu3="Sanyam"

//valid array
// let students=["Aman",1,true,"bharat",2,"Sanyam","Komal","Thasreef","Ajay"]
// let nums=[33,56,78,90]
// let mixed=[1,2,3,"Aman",true,false,33.5]

//invalid array
// let stu=[aman,komal,thasreef,ajay]

// let name="shan"

// console.log(name)

// let colors=["red","green","blue","yellow","black","purple","pink","orange","white","grey"];

//            0       1     2      3         4                       -3        -2        -1


// console.log(colors[3])

// console.log(colors[colors.length -1])

// console.log(colors[colors.length - 3])

// console.log(colors[colors.length/2 +1])

//Add elements 

// let cart=["Milk","Bread","Eggs","Butter","Cheese"]

// cart.push("tshirt") // add item at last

// console.log(cart)

// cart.push("jeans","shoes") // add multiple items at last

// console.log(cart)

// cart.unshift("books") // add item at first

// console.log(cart)


// let cart=["Milk","Bread","Eggs","Butter","Cheese"]


//chnaging elements
// cart[2]="Choclate"

// console.log(cart)
//cart.pop()// remove last item

//console.log(cart)

// cart.shift()// remove first item

// console.log(cart)

//cart.splice(2,1) // at 2nd index 1 item will be removed
//cart.splice(1,3) // at 2nd index 3 items will be removed 


//replace with splice
// cart.splice(2,1,"chicken")
// console.log(cart)
let cart=["Milk","Bread","Eggs","Butter","Cheese"]

//cart.splice(1,3,"chicken","fish","meat") // at 1st index 3 items will be removed and 3 items will be added

//adding with splice

//cart.splice(2,0,"choclate","cookies","candy") // at 2nd index 0 item will be removed and 3 items will be added


// console.log(cart)


let amazonproducts=["laptop","mobile","headphones","mouse","keyboard","charger","powerbank"]
let flipkartproducts=["laptop","mobile","headphones","mouse","keyboard","charger","powerbank"]

let mixedproducts=amazonproducts+flipkartproducts  //cobination of two arrays  but in string

let mixedproductswithconcat=amazonproducts.concat(flipkartproducts) //combination of two arrays in array


console.log(mixedproducts)


// console.log(amazonproducts.includes("pods"))

//console.log(amazonproducts.indexOf("mouse"))

//console.log(amazonproducts.join(" kjdsgfkjsfkgsk"))

// console.log(amazonproducts.reverse())