

var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = "Awesome!";
console.log(object2.myCustomProperty);      // "Awesome!"

function reflect(value) {
    return value;
}
console.log(typeof reflect);    // "function"

/* bei allen anderen ref.types gibt typeof "object" zurueck | mit <object> instanceof <type> kann zugehoerigkeit geprueft werden /true,false retour | jeder ist Object = "super-type" */

/* seit ecma-script 5 | ab ie 9 : */
var items = [];

console.log(Array
    .isArray(items));      // true

/* built in ref-types:
 Array    | An ordered list of numerically indexed values
 Date     | A date and time
 Error    | A runtime error (there are also several more specific error subtypes)
 Function | A function
 Object   | A generic object
 RegExp   | A regular expression
*/

/* JavaScript has three primitive wrapper types : String, Number, and Boolean */