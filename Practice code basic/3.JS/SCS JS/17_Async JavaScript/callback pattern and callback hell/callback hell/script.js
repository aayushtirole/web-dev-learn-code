function profilekaraao(username, cb){
    console.log("fetching profile data...");
    setTimeout(() => {
        cb({_id: 12122, username,  age: 26, email : "aayush@gmai.com" });
    }, 2000);
}

function saarePostLekarAao(id, cb){
    console.log("Fetching all posts...");
    setTimeout(() => {
        cb({_id: id, posts: ["Hey", "hello", "good morning"]});
    }, 3000);
}

function savedPostNikaalo(id, cb){
    setTimeout(() => {
        console.log("fetching saved post")
        cb({_id: id, saved: [1, 2, 45, 50, 60, 70]})
    }, 3000);
}

profilekaraao("aayush", function (data){
    console.log(data);
    saarePostLekarAao(data._id, function(posts){
       console.log(posts);
       savedPostNikaalo(data._id, function(saved){
        console.log(saved);
       });
    });
});