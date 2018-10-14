/*
 * @Author: cmcc.liaohaibo 
 * @Date: 2018-10-13 22:32:33 
 * @Last Modified by: cmcc.liaohaibo
 * @Last Modified time: 2018-10-14 21:26:17
 */

/**
 * JavaScript learn from 廖雪峰
 * @lesson01:基本语法
 */

'use strict';

 var x = 1;
 console.log(x);
 console.log('I want to learn JavaScript');

 //----------------------------------------数据类型和变量-----------------------------------------------------------

 console.log('----------------------------------------Number----------------------------------------------------')
 var a = 123;                                             //整数 123
 var b = 0.123;                                           //浮点数 0.123
 var c = 1.234e3;                                         //科学计数法 表示 1.234*10^3
 var d = -99;                                             //负数
 var e = NaN;                                             //NaN 表示Not a Number 当无法表示计算结果时，使用NaN
 var f = Infinity;                                        //Infinity表示无限大 当数值超过Number的最大值时，表示为Infinity

 /**
  * 四则运算
  */
 console.log('--------------------四则运算-----------------')
 console.log(1+2);                                        // 3                               
 console.log((1+2)*5/2);                                  // 7.5
 console.log(2/0);                                        // Infinity
 console.log(0/0);                                        // NaN
 console.log(10%3);                                       // 求余 1
 console.log(10.5%3);                                     // 1.5

 /**
  * 字符串
  */
console.log('------------------字符串----------------------')
console.log('这是一个字符串:'+"'a'");

/**
 * 比较运算符
 */

console.log('-------------------比较运算符------------------')
2 > 5                                                     // false
5 >= 2                                                    // true
7 == 7                                                    // true

/**
 * @注意
 *  == 自动类型转换，很多时候会得到很诡异的结果
 *  === 先判断数据类型，在判断值是否相等
 *  在JavaScipt中坚持使用 ===
 */

console.log(NaN === NaN);                                 // NaN这个特殊的Number与其他所有的值都不相等，包括它自己
console.log(isNaN(NaN));                                  // 唯一能判定NaN的是 isNaN()函数

/**
 * @注意： 浮点数的比较
 * 浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。
 * 要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值。
 */

console.log((1/3) === (1-2/3));                            // 返回false
console.log(Math.abs((1/3) - (1-2/3)) <0.0000001)          // 返回true

console.log('-----------------null and undefined---------------');

// JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。
// 事实证明，这并没有什么卵用，区分两者的意义不大。
// 大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。

console.log('-------------------Array---------------------------');

/**
 * 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。
*/

var arr = [1,2,3.14,'hello',null,true];
console.log(arr[0]);                                            // 1
console.log(arr[5]);                                            // true
console.log(arr[6]);                                            // 超出范围，返回undefined

console.log('------------------Object---------------------------');

/**
 * JavaScript的对象是一组由键-值组成的无序集合。
 * JavaScript对象的键都是字符串类型，值可以是任意数据类型。
 * 要获取一个对象的属性，我们用对象变量.属性名的方式：
 */

 var person = {
     name: 'liaohaibo',
     age: 27,
     tags: ['cmcc', 'js', 'network'],
     city: 'ChengDu',
     hasCar: true,
     zipcode: null
 };

console.log(person.name);
console.log(person.tags);

console.log('----------------变量----------------------------');

/**
 * 变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合,且不能用数字开头
 */

var a;                                                      // 申明了变量a，此时a的值为undefined
var $b = 1;                                                 // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007';                                          // s_007是一个字符串
var Answer = true;                                          // Answer是一个布尔值true
var t = null;                                               // t的值是null

// 同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用var申明一次，例如：
var a = 123;
a = 'ABC';
console.log(a);

/**
 * 这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。
 * 静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。
 * 例如Java是静态语言，赋值语句如下：
 * int a = 123; // a是整数类型变量，类型用int申明
 * a = "ABC"; // 错误：不能把字符串赋给整型变量
 */

console.log('--------------------strict模式--------------------------')

/**
 * strict模式
 * JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。
 * 这个设计错误带来了严重的后果：如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量。
 * 为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，
 * 在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。
 * 启用strict模式的方法是在JavaScript代码的第一行写上：'use strict'
 */

abc = 'Hello, world';
console.log(abc);                                       // 如果浏览器支持strict模式，代码将报ReferenceError错误。
