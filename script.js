const array1 = ["alma", "körte", "banán"];
const array2 = ["barack", "szilva", "szőlő"];

function addValueToEndOfArray (arr, val) {
  arr.push(val);
  return arr;

}

/* console.log(addValueToEndOfArray (array2, "dió"));
console.log(array2); */

function addValueToEndOfNewArray (arr, val) {
 /*  const newArray = array2.map(x => x); */
/*  const newArray = [...arr];
  newArray.push(val);
  return newArray; */
  return [...arr,val];
}

/* let a = 1;
let b = a;
a = 2;
b = 3;
console.log("a:", a, " b: ", b);

let c = {
  key:1,
  key2:{
    subkey:2
  }
};
let e = {key:1};
let g = c.key2;
let d = c;
c.key = 2;
d.key = 3;
console.log("c:", c, " d: ", d);
console.log({} === {});
console.log( e === c);
console.log( "alma" === "alma"); */

/* console.log(addValueToEndOfNewArray (array2, "dió"));
console.log(array2); */

function addNewArray (arr1,arr2){
/*   for (const item of arr2) {
    arr1.push(item);
  } */
 // return [...arr1,...arr2];
 return arr1.concat(arr2);
}

console.log(addNewArray(array1, array2));
console.log(array1);

//let f = {...c};
/* let f = Object.assign({}, c); */
/* let f = JSON.parse(JSON.stringify(c)); */
/* let convertCobjectToString = JSON.stringify(c);
let f = JSON.parse(convertCobjectToString);
c.key = 2;
c.key2.subkey = 5;
f.key = 3;
f.key2.subkey = 6;
g.subkey = 8;
console.log("c:", c, " f: ", f, " g:", g); */

const array3 = [
  {
    name: "Garfield",
    type: "cat",
  },
  {
    name: "Ubul",
    type: "dog"
  }
];

function filterTheCat(creatures) {
  const result = creatures.filter(creature => {
    if(creature.type ==="cat")
    {
/*       const newCreature = JSON.parse(JSON.stringify(creature));
      newCreature["note"] = "This is an amazing cat"; */
      return creature;
    }
   });
 
/*   const result = [];
  for (const creature of creatures) {
    if (creature.type === "cat") {
      creature.note = "This is an amazing cat";
      result.push(creature);
    }
  } */
  result[0].note ="This is an amazing cat";
  return result;
}

console.log(filterTheCat(array3));
console.log(array3);
