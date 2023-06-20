function A(name){
    this.name = name; //实例基本属性，强调私有，不共享
    this.arr = [1];  //实例引用属性
    this.say = function(){   //实例引用属性，强调复用，需要共享
        console.log('hello,'+name);
    }
}

//每个函数都有  prototype属性，是一个对象（即原型对象），储存共享属性和方法，  实例对象都有__proto__属性，指向原型对象
//原型对象只存在一份
let a = new A();
console.log(a.__proto__ === A.prototype);


function B(name){
    this.name =name;
}

B.prototype.say = function(){
    console.log('hello,'+this.name);
}


//5种继承方式

//1
function Parent(name){
    this.name = name ||'父亲';
    this.arr = [1];
}

Parent.prototype.say = function(){
    console.log('hello,'+this.name);
}

function Child(like){
    this.like = like;
}
Child.prototype = new Parent(); // 等价 Child.prototype.constructor = Parent


// 我们把 new 的过程拆分成以下三步：

// 1. var p={}; 也就是说，初始化一个对象p。

// 2. p.__proto__=Person.prototype;

// 3. Person.call(p);也就是说构造p，也可以称之为初始化p。

Child.prototype.constructor = Child;

let boy1 = new Child();
let boy2 = new Child();

//优点：共享了父类say 方法
console.log(boy1.say(),boy2.say(),boy1.say === boy2.say);

boy1.arr.push(2);
console.log(boy2.arr);