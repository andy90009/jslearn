/*
 * @Author: cmcc.liaohaibo 
 * @Date: 2018-10-14 23:21:54 
 * @Last Modified by: cmcc.liaohaibo
 * @Last Modified time: 2018-10-16 23:23:28
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

 console.log('-----------------------indexOf---------------------------')
 
 // 与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置

 var arr4 = [10,20,'30','xyz']
 console.log(arr4.indexOf(10))
 console.log(arr4.indexOf(20))
 console.log(arr4.indexOf('30'))
 console.log(arr4.indexOf(30))                              // 没有找到，返回-1
 console.log(arr4.indexOf('xyz'))

 console.log('----------------------slice----------------------------')

 /**
  * slice
  * slice()就是对应String的substring()版本
  * 它截取Array的部分元素，然后返回一个新的Array
  */
var arr5 = ['A','B','C','D','E','F','G']
console.log(arr5.slice(0,3))                            // 截取0-3，不包含3
console.log(arr5.slice(3))                              // 从索引3开始到结束

// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。
// 利用这一点，我们可以很容易地复制一个Array
var arr5Copy = arr5.slice() 
console.log(arr5Copy)

console.log('--------------------push and pop-------------------------')

/**
 * push()向Array的末尾添加若干元素
 * pop()则把Array的最后一个元素删除掉
 */

var arr6 = [1,2]
// 注意Array.push 返回 长度 所以下例打印4
console.log(arr6.push('A','B'))
console.log(arr6)                                       // [ 1, 2, 'A', 'B' ]
// 注意Array.pop 返回的是 删除的最后一个元素
console.log(arr6.pop())
console.log(arr6)                                       // [1, 2, 'A']

// 注意空数组Array.pop() 不会报错，返回undefined
var arr7 = []
console.log(arr7.pop())                                 // undefined
console.log(arr7)                                       // []

console.log('--------------------unshift and shift----------------------------')

/**
 * 如果要往Array的头部添加若干元素，使用unshift()方法
 * shift()方法则把Array的第一个元素删掉
 */

 var arr8 = [1,2]
 console.log(arr8.unshift('A','B'))                 // 返回长度4
 console.log(arr8)                                  // [ 'A', 'B', 1, 2 ]
 console.log(arr8.shift())                          // 返回 'A'
 console.log(arr8)                                  // ['B', 1, 2]
 
 // 连续shift3次
 arr8.shift();
 arr8.shift();
 arr8.shift();
 console.log(arr8)                                  // []
 // 空数组Array.shift()不会报错,返回undefined
 console.log(arr8.shift())                          // undefined
 console.log(arr8)                                  // []

 console.log('--------------------------sort-------------------------------')

 /**
  * sort()可以对当前Array进行排序
  * 它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序
  */
 var arr9 = ['B', 'C', 'A'];
 arr9.sort();
 console.log(arr9);

 console.log('------------------------reverse-----------------------------')

 /**
  * reverse()对当前Array反转:按索引反转
  */
 var arr10 = ['one', 'three', 'two']
 arr10.reverse();
 console.log(arr10)

 console.log('------------------------splice-----------------------------')

 /**
  * splice()方法是修改Array的“万能方法”
  * 它可以从指定的索引开始删除若干元素
  * 然后再从该位置添加若干元素
  */
 var arr11 = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
 // 从索引2开始删除，删除掉3个元素，再添加2个元素
 console.log(arr11.splice(2,3,'Google','Facebook'))                   // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
 console.log(arr11)                                                   // [ 'Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle' ]
 console.log(arr11.splice(2,2))                                       // [ 'Google', 'Facebook' ] 只删除,不添加
 console.log(arr11.splice(2,0))                                       // 返回[], 因为没有删除任何元素
 console.log(arr11)

 console.log('---------------------------------concat---------------------------')

 /**
  * concat()方法把当前的Array和另一个Array连接起来
  * 并返回一个新的Array
  */
 var arr12 = ['A','B','C']
 var added = arr12.concat([1,2,3])
 console.log(arr12)                                                 // [ 'A', 'B', 'C' ]
 console.log(added)                                                 // [ 'A', 'B', 'C', 1, 2, 3 ]

 // concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里

 console.log(arr12.concat([1,2,[3,4]]))                               // [ 'A', 'B', 'C', 1, 2, 3, 4 ]

 console.log('----------------------------join---------------------------------')

 /**
  * join()方法是一个非常实用的方法
  * 它把当前Array的每个元素都用指定的字符串连接起来
  * 然后返回连接后的字符串
  */
 var arr13 = ['A','B','C',1,2,3]
 console.log(arr13.join('-'))                                   // 返回字符串 'A-B-C-1-2-3'
 console.log(arr13.join(''))                                    // 返回字符串 'ABC123'






