// Write a function that takes a new object as input which has
// name , age  and gender and greets the user with their gender
// (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user) {
    console.log(
        "Hi Mr/Mrs " +
        user1.name +
        " your age is " +
        user1.age +
        " and your gender is " +
        user1.gender
    );
}
let user1 = {
    name: "Tusar Kumar",
    age: 21,
    gender: "male",
};
greet(user1);