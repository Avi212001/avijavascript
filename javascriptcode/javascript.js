

// //------------------------------------------------datatype---------------------------------------------------------------------

// //in this file we discuss about javacript datatype there are two type of datatype primitive and non primitve 

// // in primitive there are 7 type -> number,boolean,string,null,undefined,bigint,symbol these all are store in  stack and they all are in call by value concept (in this the change is not there in originnal value )
// // in non primitive there are 3 datatype object , array, function these all are store in heap memory and they all are in call by reference (the change in orignal value not in the copy )
 
// let a = 32;
// let b = "dsfsdf";
// let c = null;
// let d ;
// let e = true;
// let f = Symbol("22");
// let g = Symbol("22");

// console.log(f===g);


// console.log(typeof(a));



// let j ={
//  email:"avisharma2222@gmail.com",
//  pass:"sdnfjf"


// }

// let i =j;

// i.email="fbghf";

// console.log(j.email,i.email);


// //-------------------------------------------------------------------------------------------------------------------

// //--------------------------------------------------------------string in javascript--------------------------------------------

// //when we declatre the string in javascript in any code editor keep in  ind it always store in variable on the another hand when 
// // we declare the string in console window in may not take to store in any variable 
// //when we want to concat something in string we simply use + sign to concat the string multiple varibale
// //But in  odern world we use backtick (``) and placeholder in this we dont use the + sign anymore 
// //the synatx of declaring the backtick is console.log(`the name of the person is ${a} and the age is ${age}`)
// // this synatx is string interpollation 
// /*anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// */
// //these all are the method which is perform on string to perform some operation on string 
// //now take the experiment the code
// let gamename = "avibhargav";

// //we know string follow  zero indexing so when we access the data with 0 value then 

// console.log(gamename[0]);

// //now the next property was length and touppercase 

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// //next property was to find which index have which charcater -> charat(index)
// console.log(gamename.charAt(6));
// //indexof this property tells about the which character at which position 
// console.log(gamename.indexOf('a'));
// //the next property was substring and slice the only difference is when i use substring would not accept the negative value for 
// //finding the reverse cahracter of the string it ignore the vlaue andd accept the value of 0 but slice it accept the negative value 
// console.log(gamename.substring(0,4));
// console.log(gamename.slice(5,8));
// //next property was trim we use to replace the ehite space from the string only 
// let whitespace = "  avui     ";
// console.log(whitespace.trim());
// //the next property was replace it would replace the somthing from the string an replace with another thing 

// let url = "www.google/avi%20bhargav.com";
// console.log(url.replace('%20','_'));
// //the next propetry eas include it give the boolean valuees that if some value is present of the given string or not 
// console.log(url.includes('avi'));


// //the property was split in this we split the string in forms of array and fing the value 
// let arr = "avi-bhargav-21001";

// let arr1=(arr.split('-'));

// console.log(arr1[0]);


// //------------------------------------------------------Number and Math ------------------------------

// //in this topic we use number and math topic 
// //when we declare the number we have two ways 1-> let a = 2890 and 2-> let a = new Number(2890) the only differnece is the representation when we 
// //declare new Number it states that it will be number nothing else 

// let num = 100000;

// console.log(num);

// //with the help of this we perofrm various operation just like to find max min so many properties and method 
// // for that some of are 
// //1-> to fixed it is used when we have some decimal number and we want only one number is show after decimal then we use tofixed 

// console.log(num.toFixed(2));

// //2-> tolocalstring() is used to basically define the number and break them into hundred thousand 

// console.log(num.toLocaleString());

// //3-> tostring() -> it bascially convert the integer into string and then perform various function of string as well 

// console.log(num.toString());

// //4 max and min is used to know about the max and min value of the integer 

// // console.log(Number.MAX_VALUE);
// // console.log(Number.MIN_VALUE);

// // to precision -> this is used round of the number if the precision have doing d=some operationa fter decimal value 
// // console.log(num.toPrecision(2));


// //----------------------the next topic is with math from this method we use various opertaion just like round of , random ,max ,min,square,
 

// let num2 = 5.8;
// console.log(Math.sqrt(num));

// console.log(Math.floor(Math.sqrt(num)));
// console.log(Math.ceil(Math.sqrt(num)));
// console.log(Math.round(num));
// console.log(Math.random());
// let min = 1;
// let max = 6;
// console.log(Math.floor(Math.random()*(max-min+1))+min);



// // --------------------------------------------datetime---------------


// //-----------------------------------------------Array--
// //Array it is used to store multiple values of different or same datatype in a  varibale 

// //declartion of array 
// //1-> 
let myarray= [1,2,3,4,5];
console.log(myarray[0]);
//in array we have some method with the help of this we can perofrm some operation 

console.log(myarray.push(7));
let b = myarray.push(8);
console.log(myarray);

myarray.pop();
console.log(myarray);

