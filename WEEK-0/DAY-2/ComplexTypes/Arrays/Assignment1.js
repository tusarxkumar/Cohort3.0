// Write a function that takes an array of users as inputs and 
// returns only the users who are more than 18 years old


function Morethan18(users){
    const adults =[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>=18){
            adults.push(users[i]);
        }
    }
    return adults;
}
let users = [{
    name: 'Tusar',
    age: 21
},{
    name:"Rohan",
    age: 22
}]
console.log(Morethan18(users));