'use strict'
var Father ={
    name : 'sunjinbang',
    age : 29,
    school : 'bupt',
    //不要用箭头函数做为方法，会导致this指向有问题
    hello : function(){
        console.log("hello, "+this.name)
    }
};

var moyan = {
    name : 'sunmoyan'
}



moyan.__proto__ = Father;
console.log(moyan.name);
moyan.hello();

function test(){
    console.log(arguments);
}

test(1,2,3);
console.log(test.prototype.constructor);


console.log('=======================')

function Student(name){
    this.name = name || 'unnamed';
    this.hello = function(){
        console.log('hello , '+this.name);
    }
}

var  sunmy = new Student('sunmoyan');

sunmy.hello();

console.log(sunmy.__proto__.constructor);
console.log(sunmy.constructor);
console.log(sunmy.__proto__.constructor === sunmy.constructor);
console.log(Student.prototype.constructor);



console.log('==============620');


var zhangweili = {
    name : 'zhangweili',
    age : 30
}

console.log(zhangweili.prototype);