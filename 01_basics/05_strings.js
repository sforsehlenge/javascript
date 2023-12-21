const name = "hitesh" // can be donoted by double code and single code ( ""  '' )
const repoCount = 50

 console.log(name + repoCount + " Value");    // contaginate kiya it means link kiya chain m

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string m variable inject krne k liye ${} 

const gameName = new String('hitesh-hc-com')
console.log(gameName)

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // substring m alaways zero  index s start hoga negative value rhega tab bhi zero s hi start hoga
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // slice negative value of index bhi le skta h. jab negative value lega to piche s start krega
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // kya replace kru aur kisse kru

console.log(url.includes('sundar')) // asking ki url m sundar h ya nhi

console.log(gameName.split('-'));