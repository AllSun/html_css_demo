'use strict'
var Father ={
    name : 'sunjinbang',
    age : 29,
    school : 'bupt',
    hello : function(){
        console.log("hello， "+this.name)
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