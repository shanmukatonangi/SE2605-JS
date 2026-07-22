// 6. **Shortest Word Distance**
    
//     Given an array of strings `wordsDict` and two distinct strings `word1` and `word2`, which are both present in the array. Write a JavaScript function `shortestDistance` that returns the minimum distance between the positions of `word1` and `word2` within the list of words.
    
//     **Example 1:**
    
//     ```jsx
//     const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    
//     Input: wordsDict, "coding", "makes" 3-3=1
//     Output: 1
//     ```
    
//     **Example 2:**
    
//     ```jsx
//     const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
    
//     Input: wordsDict, "apple", "fig" 3-6=3
//     Output: 3
//     ```


function ShortestDistance(wordsDict,w1,w2){
    let w1index
    let w2index

    for(let i=0;i<wordsDict.length;i++){

        if(wordsDict[i]==w1){
            w1index=i

        }

        if(wordsDict[i]==w2){
            w2index=i
        }




    }
    console.log(w2index-w1index)

}

const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
let w1="apple"
let w2="fig"

ShortestDistance(wordsDict,w1,w2)