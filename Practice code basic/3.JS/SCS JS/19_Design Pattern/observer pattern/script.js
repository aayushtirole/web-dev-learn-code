class YoutubeChannel {
   constructor(){
      this.subscribers = [];
   }

   subscribe(user){
      this.subscribers.push(user);
      user.update(`${user.name}, You have Subcribed the channel`);
   }
   unsubcribe(user){
      this.subscribers = this.subscribers.filter((sub) => sub != user);
      user.update(`You have un-subscribed the channel`);
   }
   notify(message){
      this.subscribers.forEach((sub) => sub.update(message));
   }
}

class user {
   constructor(name){
      this.name = name;
   }
   update(data){
      console.log(`${this.name}, ${data}`);
   }
}

let sheryians = new YoutubeChannel();
let user1 = new user ("Harsh");
let user2 = new user ("amit");


sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("New video is live on the channel..");