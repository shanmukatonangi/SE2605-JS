// 2. **Character Reversal**
    
//     Write a JavaScript function `reverseString` that takes a string as input and returns the string with its characters reversed.
    
//     **Example 1:**
    
//     ```jsx
//     Input: "JavaScript"
//     Output: "tpircSavaJ"
//     ```
    
//     **Example 2:**
    
//     ```jsx
//     Input: "AlmaBetter University"
//     Output: "ytisrevinU retteBamlA"
//     ```

let str="javascript"
let strarr=str.split("")
console.log(strarr.reverse().join(""))
let rev=""

for(let i=str.length-1; i>=0;i--){
    rev=rev+str[i]
}
console.log(rev)
