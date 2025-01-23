let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line4 = document.querySelector(".line4");
let line5 = document.querySelector(".line5");

let content={
    "line1":"Initializing Hacking...",
    "line2":"Reading your Files...",
    "line3":"Password files Detected...",
    "line4":"Sending all passwords and personal files to server...",
    "line5":"Cleaning up..."
};
console.log(content);
function hacking (key,timeout){
    return new Promise(resolve=>{
        setTimeout(() => {
            key.innerHTML=`${content[key]}`;
            console.log(typeof(key))
            console.log(content[key]);
            console.log(content);
            
        resolve();
            
        
            
           
        }, timeout);
    })
}

async function hackit() {
    for (const key in content) {
   
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      let timeout=Math.round(Math.random()*10000);
console.log(timeout);
const element=content[key];

await hacking(key,timeout);
        
    }
}
}

hackit();




//timeout because we want to appear after some time only once 



