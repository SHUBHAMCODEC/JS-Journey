// array

const arr=[1,2,3,4,"ram",true];  // it can conatain heterogeneous type data
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }

console.log(typeof arr);


const heros=['shaktiman','ravan','meghnath']

const arr2=new Array(1,2,3,4,'shyam');


// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i]);
    
// }

// Array Functions

//

// arr2.push("shuamam");
// arr2.push(85); // ths push element at last of array
// arr2.pop();
// console.log(arr2);

//

// arr2.unshift(0);
// arr2.unshift(10);// this push the element at beginning of array
// arr2.shift()//pop at beginning
// console.log(arr2);

// console.log(arr2.includes(4));
// console.log(arr2.indexOf(4))
// console.log(arr2.indexOf(2500))

// const newArray=arr2.join();

// console.log(arr2);
// console.log(newArray)

// console.log(typeof newArray); // here type is not object but, it is string

console.log("A :",arr2);

const myn1=arr2.slice(1,4);
console.log("slice :",myn1); //it do not manipulate original array.
console.log("B",arr2);


const myn2=arr2.splice(1,3);
console.log("splice : ",myn2); //it manipulate the original array.
console.log("c",arr2);

