/*
 The [[Call]] property is unique to functions and indicates that the object can be executed
 */

var result = add(1,9); /* hoisted | only with declaration-styled-def */

/* declaration: */
function add(num1, num2) {
    return num1 + num2;
}
console.log(result);





/* result = addex(11,9);  */ /* nix hoisting => error */
/* function expression */
var addex = function (n1, n2) {return n1+n2;};


result = addex(11,9);  /* das geht, weil bei fct-expr-style def zuerst stehen muss */

console.log(result);

