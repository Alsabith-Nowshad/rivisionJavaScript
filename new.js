// let arr = [1,2,3,4,7,7,7,8,8,8,5,6,2,23,3,3,4,5,5,5,6,7,7,7,8,8]

// let sor = arr.sort((a,b)=>a-b)
// arr2 = [...new Set(sor)]

// console.log(arr2);


// let num = [12,3,44,23,54,32]
// let num2 = num.map(function(a){
//    let sum =  a * 2
//     return sum
// }) 

// console.log(num2);

// let num = [12,3,44,23,54,32]
// let filtered = num.filter(function(n){
//    New =  n  !=12
//    return New
// })

// console.log(filtered);
total = 0
let ravi = [49,78,89]


function calc(candi){
 if(candi[0]>= 50 && candi[1]>= 50 &&  candi[2]>=50){
   total = total + candi[0] + candi[1] + candi[2] 
   return total
 }else{
    total = 0
    return total
 }
}

hai = ravi.splice(1,1)

console.log(ravi)

let res = calc(ravi)

console.log(res);