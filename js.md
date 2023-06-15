# 理解原型链

每个函数都有 ` prototype` 属性

* 这个属性的值是个对象，即  `原型对象`
* 存放方法和属性
* 实现继承

每个对象都有   `__proto__ `属性

* 指向  `原型对象`      ,即 `arr.__proto__ === Array.prototype`

![img](https://images0.cnblogs.com/blog/138012/201409/172121182841896.png)

![](https://images0.cnblogs.com/blog/138012/201409/172130097842386.png)

![img](https://images0.cnblogs.com/blog/138012/201409/181509180812624.png)

![](https://images0.cnblogs.com/blog/138012/201409/181512068463597.png)

![](https://images0.cnblogs.com/blog/138012/201409/181512489403338.png)

![](https://images0.cnblogs.com/blog/138012/201409/181637013624694.png)
