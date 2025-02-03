//  const mysym=symbol("key1");
const jsuser={
    name:'indrajit',
    age:20
}
// Object.freeze(jsuser);
jsuser.age=34;
jsuser.class='2nd year';
console.log(jsuser);
jsuser.greeting=function(){
    console.log("hello i am js user");
}
jsuser.greeting2=function(){
    console.log(`hello i am jsuser , ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());