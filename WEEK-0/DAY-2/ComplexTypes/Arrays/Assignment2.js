// Write a function that takes an array of users as inputs and 
// returns only the users who are more than 18 years old


function Morethan18(users){
    const adults =[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>=18 && users[i].gender=='Female'){
            adults.push(users[i]);
        }
    }
    return adults;
}
let users = [{
    name: 'Tusar',
    age: 21,
    gender: "Male"
},{
    name:"Sukriti",
    age: 22,
    gender: "Female"
},{
    name:"Kirat",
    age: 26,
    gender: "Male"
}]
console.log(Morethan18(users));