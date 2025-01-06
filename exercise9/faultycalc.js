let a=Math.random()*100;

console.log(a);

let b=prompt("Enter your first number");
let c=prompt("Enter your operation");
let d=prompt("Enter your second number");

let obj={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**"
};

if(a>10){
    alert(eval(`${b} ${c} ${d}`));
}

else{
    c=obj[c];
    alert(eval(`${b} ${c} ${d}`));
}
