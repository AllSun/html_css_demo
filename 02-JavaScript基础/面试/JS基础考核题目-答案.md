## 第二部分 JavaScript 基础

1. `JavaScript` 定义了几种数据类型？哪些是原始类型？哪些是复杂类型？`null` 是对象吗？

   ```
   基本(原始)数据类型:string number boolean undefined null symbol
   引用数据类型: object Array function
   null是基本数据类型
   ```

2. 怎样判断“值”属于哪种类型？`typeof` 是否能正确判断类型？

   ```
   typeof 变量名 
   typeof 检测null时 返回object (遗留bug)
   typeof 检测array时 返回object
   
   ```
   
1. `NaN` 是什么？有什么特别之处？

   ```
   NaN 是一个特殊的数字,计算不出来结果时会返回NaN
   ```

2. `== `与 `=== ` 有什么区别？

   ```
   == 存在隐式转换
   === 严格等于 不存在隐式转换
   ```

   

3. `console.log(1+"2")` 和 `console.log(1-"2") `的打印结果？

   ```
   '12'
   -1
   ```

   

4. 为什么 `console.log(0.2+0.1==0.3)` 输出 `false` ？

   ```
   js表示小数不精确
   ```

   [解决](https://www.cnblogs.com/everlose/p/12497855.html)

5. 列举`Math`对象和`Date`对象的常用方法

6. 请用三元运算符改写以下代码

   ``` js
   if(a > 10){ 
       b = a    
   }else {      
       b = a - 2    
   }
   // b = a > 10? a : a-2
   ```

7. `break` 与 `continue` 有什么区别？

   ```
   break 退出离自己最近的整个for循环
   continue 退出当前这次循环,后边的继续
   ```

8. `switch...case` 语句中的 `break` 有什么作用？

   ```
   退出switch语句
   ```

   

9. 写一个函数，返回参数的平方和？    

   ``` js
   function sumOfSquares() {      
       // 补全
       var sum = 0;
       for(var i = 0;i<arguments.length;i++){
           sum += Math.pow(arguments[i],2)
       }
       return sum
   }    
   var result = sumOfSquares(2, 3, 4)    
   var result2 = sumOfSquares(1, 3)    
   console.log(result) // 29    
   console.log(result2) // 10 
   ```

10. 以下代码的输出？为什么？    

    ```js
    console.log(a);   // undefined
    var a = 1;    
    console.log(b); // b is not defined
    // 谈一下js中的提升
    // 全局作用域和函数作用域都存在提升
    // 提升是 预解析阶段,会把var声明 和function声明提升到所在作用域的最前边
    // 声明提升,但是赋值不提升
    ```

11. 如下代码的输出？为什么？    

    ```js
    var x = 10;    
    bar()     
    function bar() {      
        var x = 30;      
        function foo() {        
            console.log(x)   //30    
        }      
        foo();    
    } 
    ```

12. 如下代码的输出？为什么？    

    ```js
    var x = 10    
    bar()     
    function foo() {      
        console.log(x)    //10
    }    
    function bar() {      
        var x = 30      
        foo()    
    }
    
    // 变量的查找 是沿着作用域链向上查找 
    // 作用域链是在声明函数时就已经确定了,跟调用位置无关
    // foo函数虽然是在 bar函数内部调用,但是声明在全局,所以上一层作用域是全局作用域
    // 函数代码的执行是要回归到这个函数本身的位置执行的
    ```

13. 如下代码的输出？为什么？    

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
    console.log(a) // 1   
    console.log(c) // {name:'oli',age:3}
    // 谈一下 复杂数据类型和基本类型的不同之处？
    // 基本数据类型 变量保存的就是数据本身
    // 引用数据类型 变量保存的只是一个引用地址
    // 变量赋值的时候,仅仅是把变量保存的内容赋给了左边.
    // 所以对于引用数据类型而言,赋值结束之后两个变量拥有了相同的一个地址,不管通过任何一个地址去更改对象,都会影响另一个变量的查询
    
    // 函数参数是对象会发生什么问题？
    // 会造成在函数内部对这个对象做的修改,影响到函数外边的实参对象,原因同上
    ```

14. 写一个函数 `squireArr`，其参数是一个数组，作用是把数组中的每一项变为原值的平方。    

    ```js
    var arr = [3, 4, 6]    
    function squireArr(arr) {      
        // 补全  
        for(var i = 0;i<arr.length;i++){
            arr[i] = Math.pow(arr[i],2)
        }
    }    
    squireArr(arr)    
    console.log(arr) // [9, 16, 36]
    ```

15. 写一个函数 `squireArr`，其参数是一个数组，返回一个新的数组，新数组中的每一项是原数组对应值的平方，原数组不变。    

    ```js
    var arr = [3, 4, 6]    
    function squireArr(arr) {      
        // 补全  
        var result = []
        for(var i = 0;i<arr.length;i++){
            result.push(Math.pow(arr[i],2))
        }
        return result
    }    
    var arr2 = squireArr(arr)    
    console.log(arr) // [3, 4, 6]    
    console.log(arr2) // [9, 16, 36]
    ```

16. 封装一个判断质数的函数,要求返回`true`或`false`

17. 实现一个方法,于数组中寻找某个值作为分割的界点,使得该值左右两边的数相加相等

    ```js
     //[1,2,3,4,3,2,1]===> 返回下标3
     //[1,100,50,-51,1,1]===> 返回下标1
    
    function equalArr(arr){
        var sum = 0;
        for(var i = 0;i<arr.length;i++){
            sum+=arr[i]
        }
        
        var left = 0;
        for(var i = 0;i<arr.length;i++){
            if(left==(sum-arr[i])/2){
                // 左右相等
                return i
            }
            left += arr[i];
        }
        // 没找到
        return -1
    }
    ```

18. 如何正确的判断 `this`

```javascript
   
  function foo() {
   	console.log(this.a); // 1
   }
   var a = 1;
   foo();
   
   var obj = {
   	a: 2,
   	foo: foo,
   };
   obj.foo(); // 2
   
   var c = new foo(); // 指向c
// this 指向最后的调用者
// 构造函数中的this 指向new出来的实例对象
```

21. `JSON` 的两个方法,说明他们的作用

    ```
    JSON.parse() 把json字符串转成对象
    JSON.stringify() 把对象转成json字符串
    ```

    

22. 写一个函数，生成一个随机颜色字符串，合法的颜色为 `#000000 ~ #ffffff`。    

    ```js
    function getRandColor() {      
        // 补全    
        var code = '0123456789abcdef';
        var str = '#'
        for(var i = 0;i<6;i++){
            var num = Math.floor(Math.random()*16)
            str += code[num]
        }
        return str
    }    
    var color = getRandColor()    
    console.log(color) // #3e2f1b
    ```

23. 怎样用原生 `JS` 将一个多维数组拍平？    

    ```js
    var array = [1, [2], [3, [4, [5]]]]    
    function flat(arr) {      
        // 补全  
        var result = [];
        for(var i = 0;i<arr.length;i++){
            if(arr[i] instanceof Array){
               result = result.concat(flat(arr[i])) 
            }else{
                result.push(arr[i])
            }
        }
        return result
    }   
    // array.flat(infinity) 实现数组扁平化
    console.log(flat(array)) // [1, 2, 3, 4, 5]
    ```

24. 以下代码的输出? 为什么?

    ```js
    function getSum(a,b){
        return a+b
    }
    function foo(a,b){
        var temp = a+b;
    }
    console.log(getSum(3,5)); // ?8
    console.log(foo(3,5)); // ? undefined
    
    // 获取 函数名()  是在获取这个函数的 返回值
    ```

25. 总结一下数组常用的方法(`API`)










