const obj=new Object();
obj.name='indrajit';
obj.age=20;
const obj2={
    age:21,
    fullname:{
        userfullname:{
            firstname:'indrajit',
            lastname:'mandal'
        }
    }
    // year:'2nd'
}
const{lastname: ln}=obj2.fullname.userfullname;
const obj4=new Object();

console.log(ln);
// const obj1={
//     1:'a',
//     2:'b',
//     3:'c'
// }
// const obj2={
//     4:'d',
//     5:'e',
//     6:'f'
// }
// // const obj3={obj1,obj2};
// const obj3= Object.assign({},obj1, obj2);
// console.log(obj3 );