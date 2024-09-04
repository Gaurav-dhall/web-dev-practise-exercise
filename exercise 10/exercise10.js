// adjectives 
// crazy
// amazing
// fire

// name 
// engine
// foods
// garments

// another word 
// bros
// limited
// hub

const adjectives = {
    crazy : "crazy",
    amazing :"amazing",
    fire : "fire",


}
const names = {
    engines : "engines",
    foods:"foods",
    garments : "garments"


}
const word = {
    bros : "bros",
    limited:"limited",
    hub : "hub"


}


for (const key in adjectives) {
     const element1 = adjectives[key];
      for (const key in names){ 
        const element2 = names[key];
         for (const key in word){
       
        

        
     
           
         

        
     
                const element3 = word[key];


                console.log(element1 + " " + element2 + " " + element3);
         }
      }
   }

            

            
            
        
    

/*
a d g
b e h
c f i



*/