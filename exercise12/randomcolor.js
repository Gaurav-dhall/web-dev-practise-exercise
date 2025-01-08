let a=Math.random();
console.log(a);

let target=document.getElementsByClassName("box");

if(a<0.25){

    for(let i=0;i<target.length;i++){
       target[i].style.backgroundColor="red";
    target[i].style.color="yellow";
    }  
   
}
else if(a>=0.25 && a<0.5){
    for(let i=0;i<target.length;i++){
        target[i].style.backgroundColor="aqua";
        target[i].style.color="green";
    }
   
}
else if(a>=0.5 && a<0.75){

    for(let i=0;i<target.length;i++){
       target[i].style.backgroundColor="pink";
    target[i].style.color="blue";
    }
    
}
else{

    for(let i=0;i<target.length;i++){
        target[i].style.backgroundColor="violet";   
    target[i].style.color="red";
    }
   
}
