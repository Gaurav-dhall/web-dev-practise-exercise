

let content={
    "line1":"Initializing Hacking",
    "line2":"Reading your Files",
    "line3":"Password files Detected",
    "line4":"Sending all passwords and personal files to server",
    "line5":"Cleaning up"
};
console.log(content);
function hacking (key,timeout,noofiterationsofdots){
    return new Promise(resolve=>{
        setTimeout(() => {
        document.querySelector(`.${key}`).innerHTML=`${content[key]}`;
     let afterDots=   document.querySelector(`.${key}`).insertAdjacentHTML("beforeend",`<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span>`)
    //  document.querySelector(".dot1").style.animationIterationCount=noofiterationsofdots;
    //  document.querySelector(".dot2").style.animationIterationCount=noofiterationsofdots;
    //  document.querySelector(".dot3").style.animationIterationCount=noofiterationsofdots;
            // console.log(typeof(key))
            // console.log(content[key]);
            // console.log(content);
            // console.log(key);
            
        resolve();
            
        
            
           
        }, timeout);
    })
}

async function hackit() {
    for (const key in content) {
   
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      let timeout=Math.round(Math.random()*10000);
console.log(timeout);
let noofiterationsofdots=Math.round(timeout/1000)/2;//2s for 1 iteration of dots therefore for timeout(in second) we need to divide by 2
const element=content[key];

await hacking(key,timeout,noofiterationsofdots);
        
    }
}
}

hackit();




//timeout because we want to appear after some time only once 



