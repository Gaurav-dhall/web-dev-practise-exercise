console.log("hello world");

let j=prompt("enter a number whose factorial u want");

if(j==0){
    alert("factorial of 0 is 1");}
    else
{let a=[];

for (let i = 1; i <= j; i++) {
   a.push(i);
    
}

// let a=[1,2,3,4,5,6];

let factorial=a.reduce((a,b)=>{
 return a*b;
})

alert("your factorial is "+factorial);}

// console.log(factorial);}