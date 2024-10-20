//objects

//1. singleton objects
// Object.create(myobj);


//2. object literals

const mysym=Symbol("key1");

const JsUser={
    name: "shubham sharma",
    class:"CSE-5N",
    rollNo: 2201010959,
    //mysym:"myKey2", // this way we can add symbol in objects , but typeof this will be string not symbol..
    [mysym]:"myKey2", //here typeof will be symbol
    0:10,
    classDays:["mon","tuesday","wednesday"]
    // const friends=new {
    //     name:"kaml",
    //     class:"5n"
    // }




}

// console.log(JsUser);
// console.log(JsUser.class);
// console.log(JsUser.name="kamal"); //1. way to access the objects
// console.log(JsUser[0]);
// console.log(JsUser["name"]); //2. way to access the objects
// console.log(JsUser[0]=25);

// console.log(JsUser[10]=250); // it added at beginning of objects
// console.log(JsUser);

// console.log(JsUser[-10]=250);// it added at ending of objects
// console.log(JsUser);

// console.log(JsUser[-7]=250);
// console.log(JsUser);

// console.log(JsUser.classDays[1]);
// console.log(JsUser["classDays"][0]);

// console.log(JsUser.friends);

// console.log(JsUser[mysym]);
// console.log(typeof JsUser.mysym);

// console.log(JsUser);

// Object.freeze(JsUser); // by this we can't change the value of our object 

// JsUser.name="rahan";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hii hello");
    
}

// console.log(JsUser.greeting); // output->[Function (anonymous)]

// console.log(JsUser.greeting());// output->( hii hello
                                  //           undefined )

JsUser.greetingTwo=function(){
    console.log(`hii, ${this.name} and your Roll number is ${this.rollNo} ? or not !! `);
    
}

// console.log(JsUser.greetingTwo);

// console.log(JsUser.greetingTwo());












