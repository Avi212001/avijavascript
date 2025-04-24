

//------------------------------------------------datatype---------------------------------------------------------------------

//in this file we discuss about javacript datatype there are two type of datatype primitive and non primitve 

// in primitive there are 7 type -> number,boolean,string,null,undefined,bigint,symbol these all are store in  stack and they all are in call by value concept (in this the change is not there in originnal value )
// in non primitive there are 3 datatype object , array, function these all are store in heap memory and they all are in call by reference (the change in orignal value not in the copy )
 
let a = 32;
let b = "dsfsdf";
let c = null;
let d ;
let e = true;
let f = Symbol("22");
let g = Symbol("22");

console.log(f===g);


console.log(typeof(a));



let j ={
 email:"avisharma2222@gmail.com",
 pass:"sdnfjf"


}

let i =j;

i.email="fbghf";

console.log(j.email,i.email);


//-------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------string in javascript--------------------------------------------



