# html_css_demo

2023年5月26日
课程打卡
1✅

介绍网页基础

2✅

介绍基础标签

有收获， `<a  href="#div" alt=""></a>`	原来还可以用选择器

3✅

基本常用标签

`<div> <a href=""> <ol> <ul> <li> <span> <img src=""` alt="">  `<p>`

4✅

补充标签

转义字符   &gt;

`<table>  <tr> <td> <th> <form>`

cellspcing cellpadding

5✅

表单标签   readonly  autofocus  placeholder  disabled 属性

fieldset legend

form action  method  get post

input  type  text password  radio checkbox  reset  file  button   value name  id

select option

label  for  id

6✅

css样式选择器

p{}  #id{}  .class{}  p:hover {}  p:focus{}

width  height  font   font-size  background-color   font-style  font-family  font-style

colspan rowspan   em  strong  i   b

7✅

text-indent	text-align	    text-decoration  none   overline underline  line-through  letter-spacing  word-spacing  line-height

8✅

后代继承   交集   并集    ，文本和字体属性会继承    text-align    font-size  line-height  color

9✅

行内>id>类>标签

块级标签   行内标签   行内块标签  display    block  inline   line-block

块级标签转行内块标签的时候会有间隙问题，通常解决方案：font-size:0

图文对齐的时候，注意文字基线问题

vertical-align  bottom middle  top  baseline

10✅

vs快捷键   css   h100 ->height:100;   w100    bcg

盒子模型：padding   top  bottom  left   right

border border-style  border-color border-width 这三个属性也有四个方向可设置

margin 是设置四周的边距

默认样式清除ul ol li  list-style:none    a   text-decoration:none    *  margin:0 padding:0

11✅

margin的嵌套崩塌  overflow:hidden    padding-top:极小值

小米卡片练习、联系我们卡片、不凡学院两张卡片，5.29明天整理前面所学知识点，独立手动实践前面4个练习

12✅

背景属性：background、background-color  backgound-image:url()

backgound-position:0px  0px; auto auto ; cover ;contain

backgound-repeat: repeat-x  repeat-y  no-repeat   repeat

13✅

背景属性：background、background-color  backgound-image:url()

backgound-position:0px  0px; auto auto ; cover ;contain

backgound-repeat: repeat-x  repeat-y  no-repeat   repeat

补充：opacity 0 1   display:none/block    visibility:hidden/visible  white-space:nowrap  overflow:scroll/hidden/auto

单行溢出,样式组合

overflow:hidden

white-space:nowrap

text-overflow:ellipsis

14✅

文档流规则，文档流满足不了的时候用浮动，再满足不了用定位

弹性盒子布局，不支持IE

用于解决块元素同行展示  float: none/left/right

15✅

浮动的5个特点

块元素浮动之后,,如果不给宽度,宽度会由内容撑开

行内元素浮动之后,,可以设置宽高了,上下方向的margin也可以生效了

浮动元素 由于脱离文档流,所以无法撑起父元素的高度,,所以如果父元素没有指定搞得时候,高度就会（塌陷）丢失,对布局造成影响

还是要多敲才会发现问题！今天晚上补一补前面落下的实操

16✅

position:static/ relative/fixed/absolute      absolute最常用、relative打辅助、fixed用于侧边栏或顶部栏

absolute 、fixed丢失文档流    relative 占据原有位置

17✅

小米工具栏、卡片的定位实现

总结前面的知识点，5月30日完成

继续实践前面的知识点，尤其注意看字体、大小这块怎么确定的 ，尽量在这周5完成

后续的11节课，都要实践，暂定目标6月10日前完成整个css+html，能够仿写主要界面

5.31  html+css脑图总结完，开始实战吧！

网页实操：

1.先分析使用哪些标签，构成布局；

2.模仿：属性、间距、宽高确定；

18✅

z-index属性

蒙层的实现    rgba()

导航一般选择  ul>li    标签的宽度影响鼠标是否能点到，因此正常行内导航中的行内标签最好转换为块元素

先设置样式，再做其他处理

19✅

首页一般放在项目的根目录，命名为index.html

设计版心

line-height 和 父元素height一致时，文字就会居中

text-transform:uppercase;

水平居中、垂直居中的新办法

position:absolute;

left:50%;

往回移动自身宽度的一半

20✅

margin-top会嵌套崩塌，建议使用padding-top

使用背景图不占位置，使用img标签占位置

使用css样式，注意float、margin等会带来的问题，样式敲完，及时检查样式大小、间距等是否正确

li 使用float后，margin：0 auto无效果，

21✅

指定最小宽度，应用场景：版心大于视口的时候

交集选择器和后代选择器在使用上要注意逗号和空格的区别

图片撑元素高度，图片下面自带间隙

一定要手敲实践！！！

22
23
24
25
26
27
28
