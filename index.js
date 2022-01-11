

function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log('named');
    };
}

function returnsAnAnonymousFunction(){
    return () => console.log('anon');
}