

// Loop 1 - prints odds 1-20 (easy)

for(i = 1; i < 21; i++){
    if(i%2 == true){
        console.log(i)
    }
}

// shoudlnt it be true when values are even??? 2%2= 1 = true??

console.log(" ----------------- ")
// Loop 2 - Decreasing Multiples of 3

for(x = 101; x > 0; x--){
    if(x % 3 ==0){
        console.log(x)
    }
}

console.log("------------------------")
//loop 3 print 4,2.5,1,-0.5,-2,-3.5

for(y = 4; y>-5; y-=1.5){
    console.log(y)
}

console.log("---------------------------")
//loop 4 - add all values 1-100 to variable sum 1+2+3+...+99+100 = 5050

var sum = 0;
for(var i =0; i < 101; i++){
    sum+=  i;
}
console.log(sum)


console.log("-------------------------------")
//loop 5 - multiply all values from 1-12 , ==479001600

var product = 1;
for(var i=1; i<13; i++){
    product *= i;
}
console.log(product);
