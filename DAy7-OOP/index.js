// let gadgetname="Samsung s24"
// let gadgetprice=25000

// function Buynow(gadgetname,gadgetprice){
//     console.log(gadgetname, "has been successfully purchased")

// }

// Buynow(gadgetname,gadgetprice)


// let gadgetdetails={
//     mobilename:"iphone 14",
//     gadgetprice:40000,
//     buyproduct:function(){
//         console.log(this.gadgetname,this.gadgetprice)
//     },
//     wishlist:function(){

//     }

// }

// let gadgetdetails2={
//     gadgetname:"iphone 15",
//     gadgetprice:40000,
//     Purchase:function(){
//         console.log()
//     },
//     wishlist:function(){

//     }

// }

// let gadgetdetails3={
//     gadgetname:"iphone 16",
//     gadgetprice:40000,
//     Purchase:function(){
//         console.log(this.gadgetname,this.gadgetprice)
//     },
//     wishlist:function(){

//     }

// }


// class Gadgetdetails {

//  constructor(){
//     console.log("hello")
//  }

// }

// const g1=new Gadgetdetails()

// console.log(g1)


// class Student{

//   constructor(name,dept,city){
//     this.name=name;
//     this.dept=dept;
//     this.city=city

//     // {
//     //     name:"Bharat",
//     //     dept:"CSE",
//     //     city:"HYd"
//     // }


//   }


// }

// const student1=new Student("Bharat","CSE","Hyderabd")
// const student2=new Student("Sanyam","CSE","Hyderabd")
// const student3=new Student("Kaveri","CSE","Hyderabd")


// console.log(student1)

class BankAccount{

 constructor(name,balance){
    this.name=name;
    this.balance=balance

 }

 balancecheck(){
    console.log(`hello ${this.name} your availabe balance is ${this.balance} `)
 }

}

const customer1=new BankAccount("Shanmukh",10000)
const customer2=new BankAccount("Sanyam",20000)

console.log(customer1,customer2)

customer1.balancecheck()
customer2.balancecheck()

// student.result()


//create result generator->task