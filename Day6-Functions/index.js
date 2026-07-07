
// let coffepowder="latte"
// let customername="bharat"
// let milktype="almond milk"

// console.log(`the ${coffepowder} for ${customername} with ${milktype} is ready`)


// let coffepowder="cappucino"
// let customername="Sanyam"
// let milktype="regular"

// console.log(`the ${coffepowder} for ${customername} with ${milktype} is ready`)

// let coffepowder="latte"
// let customername="bharat"
// let milktype="almond milk"

// console.log(`the ${coffepowder} for ${customername} with ${milktype} is ready`)


// let username="Bharat"

// console.log("hello"+" "+username)


// function Camera(name){

//     console.log(`the photo of ${name} is captured`)



// }
// //Camera(name)
// Camera("Bharat")

// Camera("Sanyam")//arguments
// Camera("Pranav")



// let coffepowder="latte"
// let customername="bharat"
// let milktype="almond milk"

// console.log(`the ${coffepowder} for ${customername} with ${milktype} is ready`)



// function CofeeMachine(coffepowder,customername){

//     console.log(`the ${coffepowder} for ${customername} with ${milktype} is ready`)

// }

// CofeeMachine("latte","Bharat","Almond milk")

// CofeeMachine("latte","Pranav","regular")
// CofeeMachine("Capuccino","Aman","cold")
// CofeeMachine("black","Sanyam")


// let username="Shanmukh" //global variable

// if(true){
//     console.log(username)
// }


// function Hello(){
//     console.log("hello",username)
// }

// Hello()

// console.log(username)


// let username="Shanmukh" //global variable


//block
// if(true){
//     let username="Shanmukh"
//     console.log(username)
// }



// console.log(username)


//function scoping

// function Hello(){
//     let username="Shanmukh"
//     // console.log("hello",username)

//     return username
//     console.log("hello")


// }

// Hello()

// Hello()=username="Shanmukh"




//  console.log(Hello())


// function Hello(){
//     return "Hello"
// }


// console.log(Hello())



// function CofeeMachine(coffepowder,customername,milktype){

//     return `the ${coffepowder} for ${customername} with ${milktype} is ready`

// }


//CofeeMachine("latte","Ram","No type")=`the ${coffepowder} for ${customername} with ${milktype} is ready`

// console.log(CofeeMachine("latte","Ram","No type"))

// function Batwood(){

//     let batwoodtype="kashmir willow"

//     return batwoodtype
// }

// //Batwood()="Kashmir Willow"
// let bat=`the bat is made from ${Batwood()}`

// console.log(bat)


function RetreiveBackendData(){


  let beinfo=[{name:"Sanyam"},{name:"Aman"}]// 20sec

  return beinfo

}

let beinfo=RetreiveBackendData()







//RetreiveBackendData()=[{name:"Sanyam"},{name:"Aman"}]

// RetreiveBackendData()[0].name

function Printusers(){

    //20sec
    let rollnumbers=["01","02"]
    console.log(`${beinfo[0].name} has roll number ${rollnumbers[0]}`)


}

Printusers()

