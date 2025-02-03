const user={
    username:"indrajit",
    price: 999,

    welcomemessage: function (){
        console.log(`${this.username}, hello welcome to our website `);
        console.log(this);
    }
}
//user.welcomemessage();
// user.username="sam";
// user.welcomemessage();
//console.log(this);

// function one(){
//     let username="indrajit";
//     // console.log(this);
//     //console.log(this.username);

// }


// const one= function(){
//     let username="indrajit";
//     // console.log(this);
//     //console.log(this.username);
//     console.log(username);

// }

const one= ()=> {
    let username="indrajit";
    // console.log(this);
    //console.log(this.username);
    console.log(username);

}
const addtwo=(num1,num2)=>num1+num2;


one();
console.log(addtwo(3,5));


//  WE MISSED IMMEDIATELY INVOKED FUNCTION 