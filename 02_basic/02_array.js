const marvelHeros=['thor','Ironman','Spidy'];
const dcHeroes=['superMan','Flash',"Batman"];

marvelHeros.push(dcHeroes)

// console.log(marvelHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][2]);

// const newHeroes=marvelHeros.join(dcHeroes);
// console.log(newHeroes);


// const combineHeros=dcHeroes.concat(marvelHeros);
// console.log(combineHeros);

// const allHeros=[...dcHeroes, ...marvelHeros]  // this technique is known as Spreading 

// console.log(allHeros);
// console.log(typeof allHeros);

const anoArray=[1,2,3,[4,5,6],7,[8,9,[10,11],12],13];
// const real_anoArray=anoArray.flat(2);
// console.log(real_anoArray);
// const real1_anoArray=anoArray.flat(Infinity);
// console.log(real1_anoArray);


console.log(Array.isArray("sharma")); //checking array
console.log(Array.from("sharma")); //checking array


let score1=100;
let score2=300;
let score3=500;

console.log(Array.of(score1,score3,score2));



















