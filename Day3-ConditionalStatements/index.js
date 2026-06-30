
// let username="praveen"
// let age=61

// if (age>18 && age<65){

//     console.log("hi"+" "+username+" , "+"your age is "+age +" , you are  eligible")

// }
// else{

//     console.log("hi"+" "+username+" , "+"your age is "+age +" , you are not eligible")
// }

//{
//     dkgksjfg
//     gfshfs
//     skjdfgks
//     gfjsgh
// }




//console.log("hi"+" "+username+" , "+"you age is "+age +" , you are not eligible")

// avg 90-> O 
// 80> 90< ->A+
// 70> 80< -> B
// 60> 70< ->c

// 60< -> F


// let avg=78

// if(avg>90){
//     console.log("O")
// }else if(avg<90 && avg> 80) {
//     console.log("A")

// }else if(avg <80 && avg > 70){
//     console.log("B")
// }else if(avg <70 && age> 60){
//     console.log("C")
// }else{
//     console.log("F")
// }




// if(day==1){
//     console.log("Sunday")
// }else if(day==2){
//     console.log("Monday")
// }
// else if(day==3){
//     console.log("Tuesday")
// }
// else if(day==4){
//     console.log("Wednesday")
// }
// let day =10

// //switch(3)
// switch(day){
   
//     //day==1
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Other days")


// }

// let a=10
// let b="10"

// if(a===b){
//     console.log("hello")
// }else{
//     console.log("wrong")
// }


// let num=8
// if(num % 2 ==0){
//     console.log("even")

//     if(num%5==0){
//         console.log("div by 5")

//     }else{
//         console.log("not div by 5")
//     }

// }else{
//     console.log("odd")
// }


// "this is even number" => num %2 == 0
// "it is also divisible by 5" num % 5 ==0


let applied=false
let certificatesverified=false
let feepaid=false

if(applied==true){
    console.log("you are applied")
    if(certificatesverified==true){
        console.log("certificated verified")
        if(feepaid==true){
            console.log("All cleared")
        }else{
            console.log("please clear your fees")
        }
    }else{
        console.log("please verify")
    }
}
else{
    console.log("Please apply")
}