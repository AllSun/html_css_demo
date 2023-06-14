// es6 strict 模式
var x = 1;
var y = 0;
var z = 1.0;

/*多行注释  js严格区分大小写*/

if (x > y) {
    console.log('hello world');
}

//不建议使用
if (x == z) {
    console.log('相等1');
}


if (x === z) {
    console.log('相等2');
}

var a = new Array(1, 2, 3)

console.log(a);

//字符串不可变
var str = '我叫孙金榜';
console.log(str.length);
console.log(str[0]);

str.toUpperCase();
str.toLowerCase();
console.log(str.indexOf('叫'));
console.log(str.substring(2, 5));


var a = [1, 2, 3, 4, 5, 6]
a.length;
// 不建议操作
a.length = 3;
a[0] = 7;

a.indexOf(1);
console.log(a.slice(0, 2));

var aCopy = a.slice();
console.log(aCopy);

a.push(9);
a.push(10);
a.pop();
console.log(a);

a.unshift(8);
a.unshift(10);
a.shift();
console.log(a);
console.log(a.sort());
console.log(a.reverse());
console.log(a);

console.log(a.splice(3, 1));
console.log('=======');

var arr = [1, 2, 3, 4];
var arradd = arr.concat([5, 6, [7, 8]]);
console.log(arradd);

console.log(arr.join('-'));
console.log('=======');

var sunjinbang = {
    name: '金榜',
    age: '24',
    hobby: 'doi',
    //不推荐
    'middle-school': '清流一中'
}

console.log(sunjinbang.age);
console.log(sunjinbang['middle-school'])
console.log('age' in sunjinbang);

//条件判断
var weight = 70
var height = 1.7
var bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log('过轻');
}
else if (bmi < 25) {
    console.log('正常');
}

//循环
var x = 1;
var i;
for (i = 1; i <= 10; i++) {
    x = x * i;
}
console.log('=======');
for (key in sunjinbang) {
    console.log(key);
}

console.log('=======');
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
console.log(x)


console.log('======= Map');
var score = new Map();
score.set('sun', '100');
score.set('zhang', '100');
score.set('wang', '100');
console.log(score);
console.log(score.get('sun'));
score.delete('zhang')
console.log(score);

console.log('=======  Set');
var s = new Set([1, 2, 3]);
s.add(3);
s.delete(2);
console.log(s);

for (var x of s) {
    console.log(x);
}

s.forEach(function (elememt, index, set) {
    console.log('第' + index + '个元素：' + elememt);
})


console.log('=======  函数及它的常用参数');

var test = function (x, y) {
    return x > y;
};
console.log(test());

function abs(x) {
    if (typeof x !== 'number') {
        throw 'not a number';
    }
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}

function text_arguments(x, y) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function sum(...rest) {
    if (rest.length === 0) {
        return 0;
    }
    else if (rest.length === 1) {
        return rest[0];
    }
    else {
        var total = 0;
        for (var i = 0; i < rest.length; i++) {
            total = total + rest[i];
        }
        return total;
    }
}

function area_of_circle(r, pi) {
    if (arguments.length === 2) {
        pi = pi;
    } else {
        pi = 3.14;
    }

    return r * r * pi;
}

console.log('=======  函数作用域');
// window.console.log('window全局对象');
//let关键字，定义块级作用域
for (let i = 0; i < 100; i++) {

}
//const 定义常量
const PI = 3.14;
//解构赋值
let [q, [w, e]] = [1, [2, 3]];
console.log(q, w, e);
//this 关键字 非对象中非stict模式，指向window；非对象stict模式，指向undefined
//apply()、call()
//使用apply完成装饰器模式


console.log('=======语法糖  map /reduce函数');
function pow(x) {
    return x * x;
}

var arr1 = [1, 2, 3];
var results = arr1.map(pow);
console.log(results);
var results = arr1.map(String);
console.log(results);

function product(arr) {
    return arr.reduce(function (x, y) {
        return x * y;
    });
}


function string2int(s) {
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[i] = s[i];
    }
    function to_int(x) {
        return x * 1;
    }
    console.log(arr.map(to_int));
    return arr.map(to_int).reduce(function (x, y) {
        return 10 * x + y;
    });
}

console.log(string2int('123'));


var reduce_arr = ['adam', 'LISA', 'barT'];


//有必要研读下 map的官方文档  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  限时6月15日完成
function normalize(arr) {
    //return arr.map(function get_norm(x) { return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase(); });
    return arr.map((x) => { return x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase(); });
}
console.log(normalize(reduce_arr));

function get_primes(arr) {
    return arr.filter((x) => {
        if (x === 1) {
            return false;
        }
        if (x === 2) {
            return true;
        }
        var i = 2;
        while (i < x) {
            if ((x % i) !== 0) {
                i++;
            } else {
                return false;
            }
        }
        return true;
    })
}

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()

console.log(f);
console.log(f());
console.log(f());

console.log('================闭包真是让人难以理解');
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
var results = count();
console.log(results);
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());

/*
1.results指向数组的三个匿名函数，再上面的例子也同样提醒过，变量都是指向内部函数；
2.因为形成闭包，可以把for循环中的var i这个变量的作用域引申到count函数外；
3.var results = count(); 这句的时候，count()函数内部的变量i完成3次自增后，又自增一次i=4，不满足条件循环条件后退出；这时候函数还是抽象化的没有赋值，可以理解为还是return i*i;
4.var f1 = results[0];  这句的时候执行函数，return i*i 带入变量i=4 ，所以数组每个元素都变成了16
*/


arr.sort((x, y) => {
    if (x > y) {
        return 1;
    } else {
        return -1;
    }

    return 0;
});


console.log('a b   c'.split(/\s+/));

var re = /^[\w]+[\.]*[\w\d]*@\w+\.\w+/;
console.log(re.test('bill%gates@ms.com'));