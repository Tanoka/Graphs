
// Tail call
// Tail recursive
// Thunk (continuation-passing style)
// Tail call optimization. No existe en Javscript. Es tipica de lenguages funcionales reales, haskell, etc.. Esta en la especificacion ES6, pero el unico que la sigue es Safari.
//  Node lo implemento hace tiempo, pero lo eliminaron, daba problemas, bugs...no hay interes en implementarlo.
// Trampoline
//
function trampoline(fn) {  
	while (fn && fn instanceof Function) { 
	//continue if fn is not undefined/null and if it is still a  function 
		fn = fn();
    }
	//we call the function and assign the result of called previous fn to new fn 
	return fn;
	//when we are done return fn when fn is the result and no longer function.
}

exports.trampoline = trampoline

// Example how to apply
// n after every number to work with native bigint
/*
function factorial(n) {
	var _factorial = function(result, n) {
    	if (n === 1n)
     		return result;   
		raux = result * n
		return _factorial(raux, n - 1n) 
  	} 
  	return trampoline(_factorial(1n, n));
}

factorial(1000n)
*/

