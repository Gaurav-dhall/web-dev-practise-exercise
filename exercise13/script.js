let button=document.getElementById("addcard");
let cardnumber=0;

function createCard (title , channelName,views,monthold,duration,thumbnail,cardnumber){

   let container=document.querySelector(".container");

   //container in which cards are added
  container.insertAdjacentHTML("beforeend",

    //card html 
   ` <div class="card" id=cardno${cardnumber}>

     <!-- card has left and right content  -->
      <!-- <div class="left"> --> 
         <!-- left content has image and duration --> 
   <div id="thumbnail">
    <div id="duration"></div>
   </div>
  
 <!-- </div> --> 

   <div class="content">
    <div id="title"></div>
    <div class="description">
        <div id="channel" ></div>

        <div id="views" ></div>
        <div id="monthold" > </div>
    </div>
   </div>

</div>`
   );

  let newcard = document.getElementById("cardno"+cardnumber);
newcard.querySelector("#title").innerHTML=title;
newcard.querySelector("#channel").innerHTML=channelName;
newcard.querySelector("#views").innerHTML=views;
newcard.querySelector("#views").innerHTML=views;
newcard.querySelector("#monthold").innerHTML=monthold;
newcard.querySelector("#duration").innerHTML=duration;


newcard.querySelector("#thumbnail").style.backgroundImage=`url(${thumbnail})`;


   
   
   


}
button.addEventListener("click",()=>{
cardnumber+=1;
   let title=prompt("enter title");
   let channelName=prompt("enter channel name");
   let views=prompt("enter views");
   let monthold=prompt("enter monthold");
   let duration=prompt("enter duration");
   let thumbnail=prompt("enter link of thumbnail");
   

   createCard(title,channelName,views,monthold,duration,thumbnail,cardnumber);
        
});



// createCard("Introduction to backend: Sigma web dev vedio #2","CodeWithHarry" ,560000,7,"31:20","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w",2)