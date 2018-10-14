/*
 * @Author: cmcc.liaohaibo 
 * @Date: 2018-10-14 00:47:50 
 * @Last Modified by: cmcc.liaohaibo
 * @Last Modified time: 2018-10-14 23:37:10
 */

 //'use strict';
 
 /**
  * 字符串
  * JavaScript字符串用''或""来表示
  * 如果 ' 本身也是字符串，可以用 ""来包裹，例如 " I'm OK!"
  * 如果字符串本身既包括'和",可以用转移字符来标识，例如 'I\'m \"OK\"!'
  */

console.log("-----------------------字符串-------------------------");
console.log("I'm OK!");
console.log('I\'m \"OK\"!');
console.log('\x41');                                        // ASCII字符:以 \x## 形式表示 完全等同于 'A'
console.log('\u4e2d\u6587');                                // Unicode字符:以 \u#### 形式表示 完全等同于'中文'

/**
 * 多行字符串 需浏览器对es6支持
 * '这是一个
 * 多行
 * 字符串'
 */
var str = '这是一个\n多行\n字符串';                             // es6中能够直接换行，不用\n
console.log(str);

/**
 * 模板字符串
 */
var name = 'liaohaibo';
var age = '27';
var message = '你好，' + name + ',你今年' + age + '岁了！';
console.log(message);

// ES6新增了一种模板字符串，它会自动替换字符串中的变量.
var msg = `你好，${name},你今年${age}岁了！`;
console.log(msg);

/**
 * 操作字符串
 */
var s = 'Hello,JavaScipt!';
console.log(s.length);                                      // s.length获取字符串长度
console.log(s[0]);                                          // H
console.log(s[5]);                                          // ,
console.log(s[15]);                                         // !
console.log(s[16]);                                         // 超出索引，一律返回undefined

// 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果.

var s1 = 'Test';
// 在严格模式'use strict'中, string 是只读的，所以直接赋值会报错
s1[0] = 'X';                                               
console.log(s1);                                            // Test

/**
 * toUpperCase():把一个字符串全部变成大写
 */
console.log(s1.toUpperCase());

/**
 * toLowerCase():把一个字符串全部变为小写
 */
console.log(s1.toLowerCase());

/**
 * indexOf():会搜索指定字符串出现的位置
 */
console.log(s.indexOf('JavaScipt'));
console.log(s.indexOf('javascript'));                   // 没有找到指定的子串，返回-1

/**
 * substring():返回指定索引区间的子串
 */
console.log(s.substring(0,5));                          // 从索引0-5，不包括5 返回Hello
console.log(s.substring(6));                            // 从索引6开始到结束  返回JavaScript

/**
 * 字符串转数组
 */

console.log(s.split(','))                              // 返回 [ 'Hello', 'JavaScipt!' ]

// 字符串没有的','时候，返回一个数组，元素只有一个，就是该字符串
var s2 = 'mybatis'
console.log(s2.split(','));                            // 返回 [ 'mybatis']


