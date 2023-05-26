## JavaScript 基础

1. `JavaScript` 定义了几种数据类型？哪些是原始类型？哪些是复杂类型？`null` 是对象吗？

2. 怎样判断“值”属于哪种类型？`typeof` 是否能正确判断类型？

3. `NaN` 是什么？有什么特别之处？

4. `== `与 `=== ` 有什么区别？

5. `console.log(1+"2")` 和 `console.log(1-"2") `的打印结果？

6. 为什么 `console.log(0.2+0.1==0.3)` 输出 `false` ？

7. 列举`Math`对象和`Date`对象的常用方法

8. 请用三元运算符改写以下代码

   ``` js
   if(a > 10){ 
       b = a    
   }else {      
       b = a - 2    
   }
   ```

9. `break` 与 `continue` 有什么区别？

10. `switch...case` 语句中的 `break` 有什么作用？

12. 以下代码的输出？为什么？    

    ```js
    console.log(a);    
    var a = 1;    
    console.log(b);
    // 谈一下js中的提升
    
    ```

13. 如下代码的输出？为什么？    

    ```js
    var x = 10;    
    bar()     
    function bar() {      
        var x = 30;      
        function foo() {        
            console.log(x)       
        }      
        foo();    
    } 
    ```

14. 如下代码的输出？为什么？    

    ```js
    var x = 10    
    bar()     
    function foo() {      
        console.log(x)    
    }    
    function bar() {      
        var x = 30      
        foo()    
    }
    ```

15. 如下代码的输出？为什么？    

    ```js
    var a = 1    
    var c = {name: "oli", age: 2}    
    function f1(n) {      
        ++n    
    }    
    function f2(obj) {      
        ++obj.age    
    }    
    f1(a)     
    f2(c)     
    f1(c.age)     
    console.log(a)     
    console.log(c)
    // 谈一下 复杂数据类型和基本类型的不同之处？
    // 函数参数是对象会发生什么问题？
    ```

16. 写一个函数 `squireArr`，其参数是一个数组，作用是把数组中的每一项变为原值的平方。    

    ```js
    var arr = [3, 4, 6]    
    function squireArr(arr) {      
        // 补全    
    }    
    squireArr(arr)    
    console.log(arr) // [9, 16, 36]
    ```

17. 写一个函数 `squireArr`，其参数是一个数组，返回一个新的数组，新数组中的每一项是原数组对应值的平方，原数组不变。    

    ```js
    var arr = [3, 4, 6]    
    function squireArr(arr) {      
        // 补全    
    }    
    var arr2 = squireArr(arr)    
    console.log(arr) // [3, 4, 6]    
    console.log(arr2) // [9, 16, 36]
    ```

18. 封装一个判断质数的函数,要求返回`true`或`false`

19. 实现一个方法,于数组中寻找某个值作为分割的界点,使得该值左右两边的数相加相等

    ```js
     [1,2,3,4,3,2,1]===> 返回下标3
     [1,100,50,-51,1,1]===> 返回下标1
    ```

20. 如何正确的判断 `this`

```javascript
   
  function foo() {
   	console.log(this.a);
   }
   var a = 1;
   foo();
   
   var obj = {
   	a: 2,
   	foo: foo,
   };
   obj.foo();
   
   var c = new foo();
```

20. `JSON` 的两个方法,说明他们的作用

21. 写一个函数，生成一个随机颜色字符串，合法的颜色为 `#000000 ~ #ffffff`。    

    ```js
    function getRandColor() {      
        // 补全    
    }    
    var color = getRandColor()    
    console.log(color) // #3e2f1b
    ```

22. 怎样用原生 `JS` 将一个多维数组拍平？    

    ```js
    var array = [1, [2,8], [3, [4, 5]]]    
    function flat(arr) {      
        // 补全    
        // 递归
    }    
    console.log(flat(array)) // [1, 2, 8,3, 4, 5]
    ```

23. 以下代码的输出? 为什么?

    ```js
    function getSum(a,b){
        return a+b
    }
    function foo(a,b){
        var temp = a+b;
    }
    console.log(getSum(3,5)); // ?
    console.log(foo(3,5)); // ?
    ```

24. 总结一下数组常用的方法(`API`)










