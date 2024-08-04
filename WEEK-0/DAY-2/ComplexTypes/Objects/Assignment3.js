function greet(users){
    console.log("Hi " + users.name + " your age is " + users.age);
    if(users.age>=18){
        console.log("You are legal to vote");
    }
    else{
        console.log("You are not legal to vote until now");
    }
}
let users = {
    name: "Tusar",
    age: 21
}
greet(users);
