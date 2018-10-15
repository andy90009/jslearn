/*
 * @Author: cmcc.liaohaibo 
 * @Date: 2018-10-14 23:21:54 
 * @Last Modified by: cmcc.liaohaibo
 * @Last Modified time: 2018-10-16 00:29:12
 */

 /**
  * Array
  * JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素
  */

console.log('-----------------------------Array---------------------------------')
var arr = [1, 2, 3.14, 'Hello', null, true]
console.log(arr.length)                                                // 获取arr的长度

/**
 * 给Array.length 赋值会导致Array的变化
 */
var arr1 = [1,2,3]
arr1.length = 6                                           // arr 变为[1, 2, 3, undefined, undefined, undefined]
console.log(arr1)

// Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array
var arr2 = ['A','b','c']
arr2[1] = 99
console.log(arr2)                                       // arr2: [ 'A', 99, 'c' ]

// 请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
var arr3 = [1,2,3]
arr3[5] = 'x'
console.log(arr3);                                      // arr3: [1, 2, 3, undefined, undefined, 'x']

/**
 * 大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。
 * 然而，JavaScript的Array却不会有任何错误。
 * 在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。
 */

/**
 * indexOf
 */

 console.log('-------------------------------indexOf-------------------------')
 
 // 与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置

 var arr4 = [10,20,'30','xyz']
 console.log(arr4.indexOf(10))
 console.log(arr4.indexOf(20))
 console.log(arr4.indexOf('30'))
 console.log(arr4.indexOf(30))                              // 没有找到，返回-1
 console.log(arr4.indexOf('xyz'))

