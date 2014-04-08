/*
 Boolean   | true or false
 Number    | Any integer or floating-point numeric value
 String    | A character or sequence of characters delimited by either single or double quotes (JavaScript has no separate character type)
 Null      |  A primitive type that has only one value, null
 Undefined |  A primitive type that has only one value, undefined (undefined is the value assigned to a variable that is not initialized)
 */

var color1 = 'red' ;
var color2 = color1 ;
console.log(typeof color1);

/* primitive type: copy of value in var color2 */
console.log("color1="+color1);
console.log("color2="+color2);

color1 = "blue" ;
console.log("color1="+color1);

var ref;    // assigned undefined automatically
console.log("ref="+ref);
console.log(typeof ref);

ref = null ;
console.log("ref="+ref);
console.log("   "+typeof ref);
/* Notice that this code uses the triple equals operator (===) instead of the double equals operator. The reason is that triple equals does the comparison without coercing the variable to another type.*/
console.log(ref === null);

console.log(typeof false);
console.log(typeof 100.25);

/*Despite the fact that they have methods, primitive values themselves are not objects. JavaScript makes them look like objects to provide a consistent experience in the language, as you’ll see later in this chapter*/
console.log(color1.toUpperCase());
console.log(color1.charAt(0));
console.log(color1.substring(0,2)); //get chars from 0 to 1

var zahl = 123.499;
console.log(zahl.toFixed());

