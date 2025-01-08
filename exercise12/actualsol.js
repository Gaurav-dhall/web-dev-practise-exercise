console.log("this is actual solution ");

let targets=document.getElementsByClassName("box");

function getrandomcolor(){
    // random number betweek two numbers a andb is a+Math.randowm()*(b-a)
    let num1=Math.ceil( 0+Math.random()*255);
    let num2=Math.ceil( 0+Math.random()*255);
    let num3=Math.ceil( 0+Math.random()*255);

    // Math.ceil converts the random number to next integer 

    console.log(num1,num2,num3);

    return `rgb(${num1},${num2},${num3})`; 
    // rgb is from 0 to 255

};

Array.from(targets).forEach((e)=>{

e.style.backgroundColor=getrandomcolor();
    e.style.color=getrandomcolor();

})