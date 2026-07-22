let str="abcdef"

let strarr=str.split("")

for(let i=0;i<strarr.length;i=i+2){
    // strarr[i]=strarr[i+1]
    // strarr[i+1]=strarr[i]

    [strarr[i],strarr[i+1]]=[strarr[i+1],strarr[i]]
    //positions            =  values
    // [strarr[0],strarr[1]]=[b,a]
    // [strarr[2],strarr[3]]=[d,c]

}
console.log(strarr.join(""))


// [a,b]=[1,2]