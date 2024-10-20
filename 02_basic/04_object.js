// two ways to initialise an object :
//  1. Singleton
//  2. Object Literals (in 03_objects ->> expalined)

//here let see 1 case :

const myObj=new Object();
// console.log(myObj);

myObj.id="126awx";
myObj.name="somya";
myObj.date="10-09-2024";
myObj.greeting=function(){
    console.log(`hii, i am ${this.name} and my DoB is ${this.date}`);
    
}


const newobj={
    email:" awx!@gmail.com",
    name: {
        userfullname:{
            firstname:"raj",
            lastname:"purohit",
        }
    }
}

// console.log(newobj.name.userfullname.lastname);
// console.log(myObj.date);
// console.log(myObj.greeting());

const obj1={1:'a', 2:'b'}
const obj2={3:'c', 4:'d'}

// const obj3={obj1, obj2};
// const obj3=Object.assign({},obj1,obj2);  // {}-> target and rets are source

const obj3={...obj1, ...obj2}; //simple and fast way to join two objects
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "hgmail.com"
    },
    {
        id: 1,
        email: "hcgmail.com"
    },
]

// console.log(users[1].email);
// console.log(users[2].email);


const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//..........DESTRUCTURING ..................

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "SHUBHAM SHARMA",
}

//course.courseInstructor;

const {courseInstructor: coach}=course

console.log(course);
console.log(coach);






