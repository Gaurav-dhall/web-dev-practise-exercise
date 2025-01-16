let button=document.getElementById("addcard");

function createCard (title , channelName,views,monthold,duration,thumbnail){
    console.log(title,channelName,views,monthold,duration,thumbnail);


}
button.addEventListener("click",()=>{

   let title=prompt("enter title");
   let channelName=prompt("enter channel name");
   let views=prompt("enter views");
   let monthold=prompt("enter monthold");
   let duration=prompt("enter duration");
   let thumbnail=prompt("enter link of thumbnail");

   createCard(title,channelName,views,monthold,duration,thumbnail);
        
});



// createCard("Introduction to backend: Sigma web dev vedio #2","CodeWithHarry" ,560000,7,"31:20","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")