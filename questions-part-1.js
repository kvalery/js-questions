//  "use strict";
//1---------------------------------------------------------------------------------------------------------------------
// console.log( typeof bar );
// var bar;
// console.log( bar() );
// bar = function () {
//   return 'world'
// };
// console.log( bar() );
// function bar2() {
//   return 'world2'
// };
//2---------------------------------------------------------------------------------------------------------------------
// console.log( typeof foo );
// console.log( foo() );
// function foo() {
//   return 'foo'
// }
// console.log( foo() );
//3---------------------------------------------------------------------------------------------------------------------
// // var a;
// (function () {
//    var a = b = 3;
// })();
// console.log( typeof a );
// console.log( typeof b );
//4---------------------------------------------------------------------------------------------------------------------
//  console.log( false == '0' )
//  console.log( false === '0' )
//  console.log( false == 'false' )
//  console.log( true == 'true' )
//  console.log( true == [ 1 ] )
//  console.log( null == null )
//  console.log( null == undefined )
//  console.log( undefined === undefined )
//  console.log( "нечисло" * 2)
//5---------------------------------------------------------------------------------------------------------------------
// какой результат выдаст клик по кнопке
//   for (var i = 0; i < 5; i++) {
//
//     const btn = document.createElement('button')
//     btn.appendChild(document.createTextNode("button" + i))
//     btn.addEventListener('click', function () {
//       console.log(i)
//     })
//     document.body.appendChild(btn)
//   }
//7---------------------------------------------------------------------------------------------------------------------
// var fullName = 'rrrrrrr';
// const obj = {
//   fullName : 'ddddddddd',
//   prop: {
//     fullName : 'EEEEEEE',
//     getFullName: function (name) { return name || this.fullName; },
//     getPropName: name => this.fullName
//   }
// };
// console.log( obj.prop.getFullName() );
// var test = obj.prop.getFullName;
// console.log( test() );
// console.log( obj.prop.getFullName.call( obj ) );
// console.log( obj.prop.getPropName.call( obj.prop ) ) ;
//8---------------------------------------------------------------------------------------------------------------------
// прототипы


//
//9---------------------------------------------------------------------------------------------------------------------
// call aplay
//
//6---------------------------------------------------------------------------------------------------------------------
//6---------------------------------------------------------------------------------------------------------------------



//----------------------------------------------answers-----------------------------------------------------------------
//1
// undefined - первая строчка т.к. переменная определена но в нее не присвоенно значение, это свойство есть у дом
// questions-part-1.js:4 Uncaught TypeError: bar is not a function ошибка при вызове зункции
// дальше компилятор не пойдет
// обьявленная в самом низу функция с самого начала будет видна и доступна т.к. всплывет в начале компиляции
// первыми всплывают function затем var и становятся undefined
//2
// вернет тип function
// все вызовы функция отраотает, усли вызвать typeof foo() вернется string
//3
// без директивы use strict в доме пояится только b т.к. в момент присвоения а, b еще не обьявленна, typeof a = undefined
// такого свойства нет
// с "use strict"; вообще ошибка ReferenceError, непрямое создание глобального объекта почти всегда является ошибкой,
// его можно создать толко через var, при создании в нутри Ф он останется там и на глобальном уровне его не будет видно
// self-invoking functions - самовызывающаяся Ф, Преимущество от использования самовызывающихся функций вы получите,
// если нужно выполнить код один раз и сохранить его резульататы во "внешней среде"(без объявления глобальных переменных
//4
// При сравнении числа и строки, строка преобразуется в числовое значение.
// Яваскрипт при этом получает значение числа из строкового литерала: "123" == 123.
// Если один из операндов - булевый, то он преобразуется к 1, если он true и к +0, если он false
// Если объект сравнивается с числом или строкой, яваскрипт пытается получить соответствующее значение для объекта.
// Он преобразует объект к элементарному значению, строке или числу, используя методы valueOf и toString.
// Если преобразовать объект не удается - генерируется ошибка выполнения.
// существует 5 «примитивных» типов: number, string, boolean, null, undefined и 6-й тип – объекты object.
// 1 / 0 - Infinity, "нечисло" * 2 NaN, ошибка.
// null специальное значение, которое имеет смысл «ничего» или «значение неизвестно».
// undefined «значение не присвоено».Если переменная объявлена, но в неё ничего не записано, значение undefined:
// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof {} || [] // "object"
// typeof null // "object"  (1)
// typeof function(){} // "function"  (2)
//5
// код не запустится тк его нужно обернуть в window.onload
// document.createTextNode("button" + i) определяет свойство со строкой и на этапе испалнения i серии итерации
// результат будет 5 тк в конце цикла i получит значение 5 а все функции ссылаются на i общее i
// либо поменять var на let вариант решения проблеммы
// window.onload = function any_function_name() {
//
//   function set ( num ) {
//     const btn = document.createElement('button')
//     btn.appendChild(document.createTextNode("button" + num))
//     btn.addEventListener('click', function () { console.log(num) })
//     document.body.appendChild(btn)
//   }
//
//   for (var i = 0; i < 5; i++) {
//     set(i)
//   }
// }
//7
// var f = () => {'use strict'; return this};
// f() === window; // или глобальный объект
// Все остальные правила строго режима применяются как обычно.
// Вызов с помощью call или apply
// Так как значение this определяется лексикой, вызов стрелочных функций с помощью методов call() или apply(),
// даже если передать аргументы в эти методы,  не влияет на значение this:
//


// var arr = ["a","b","c","d","e"];
// var delay = 1000;
//
//
// function setDelay(currentIndex) {
//   setTimeout(function() {
//     console.log(arr[currentIndex]);
//   }, delay*currentIndex);
// }
//
// for(var i=0; i < arr.length; i++) {
//
//   setDelay(i)
//
// }

// info ----------------------------------------------------------------------------------------------------------------
// Элемент <!DOCTYPE> предназначен для указания типа текущего документа
// — DTD (document type definition, описание типа документа).
// Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу
// поскольку HTML существует в нескольких версиях, кроме того,
// имеется XHTML (EXtensible HyperText Markup Language, расширенный язык разметки гипертекста), похожий на HTML
// но различающийся с ним по синтаксису.
// Чтобы браузер «не путался» и понимал, согласно какому стандарту отображать веб-страницу и необходимо взадавать <!DOCTYPE>.
//
// XHTML — семейство языков разметки веб-страниц на основе XML, повторяющих и расширяющих возможности HTML 4
//
// прототипы
// var animal = {
//   eats: true
// };
// var rabbit = {
//   jumps: true
// };
//
// rabbit.__proto__ = animal;
// в rabbit можно найти оба свойства

var pairs = [{"key":"A","value":"a"}, {"key":"B","value":"b"},{"key":"U","value":"u"}, ...]

var reesult  = pairs.map(function(data) {
  return data["key"] = data["value"];
});

var result = {"A":"a","B":"b","U":"u", ...}




