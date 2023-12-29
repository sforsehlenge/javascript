//falsy
// false, 0, -0 , BigInt 0n, "" , undefined , NaN

// truthy

// " 0 " , 'false', " ", [] , {}, function(){}



// checking array is empty or not

const userEmail= []

if(userEmail.length==0){
    console.log("arary is empty")
}

// checking object is empty or not

const anyObject= {}

if(Object.keys(anyObject).length==0){
    console.log("object is empty")
}


// Nulish coalescing Operator (??): null, undefined

let vall;
val1=5 ?? 10



//terniary operator

// condition ? true : false

const price =100
price>=80 ? console.log("price is greatr than 80"): console.log("price is less than 80")