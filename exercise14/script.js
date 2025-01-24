

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

     const parent = document.querySelector(`.${key}`);
    parent.querySelector(".dot1").style.animationIterationCount = noofiterationsofdots;
    parent.querySelector(".dot2").style.animationIterationCount = noofiterationsofdots;
    parent.querySelector(".dot3").style.animationIterationCount = noofiterationsofdots;
    
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
      let timeout=( Math.floor(Math.random() * (7 - 1 + 1)) + 1)*1000;//*1000 to convert to ms
console.log(timeout);
let noofiterationsofdots=(timeout/1000)/1;//1s for 1 iteration of dots therefore for timeout(in second) we need to divide by 1//there is a problem in this that the dots will blink for the time of current line however should blink for the time of next line but currently i am not going into it
const element=content[key];

await hacking(key,timeout,noofiterationsofdots);
        
    }
}
}

hackit();




//timeout because we want to appear after some time only once 



