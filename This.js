
const user ={
    username : "sonu",
    price : 100,

    welcomemessage : function(){
        console.log(`Welcome ${this.username}, this is your website`);
        console.log(this);
}
}
user.welcomemessage();

console.log(this);

// const add = (a, b) => a + b; // Arrow function with implicit return
// console.log(add(5, 3)); // Output: 8

function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++; // `this` refers to the Timer instance
        console.log(this.seconds); // Logs the incremented seconds
    }, 1000);
}

const timer = new Timer();
console.log(timer.seconds);



