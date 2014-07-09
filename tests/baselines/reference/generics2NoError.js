//// [generics2NoError.ts]
interface A { a: string; }
interface B extends A { b: string; }
interface C extends B { c: string; }
interface G<T, U extends B> {
    x: T;
    y: U;
}


var v1: {
    x: { a: string; }
    y: { a: string; b: string; c: string };
}; // Ok


var v2: G<{ a: string }, C>;   // Ok, equivalent to G<A, C>
var v4: G<G<A, B>, C>;         // Ok

//// [generics2NoError.js]
var v1;
var v2;
var v4;


//// [generics2NoError.d.ts]
interface A {
    a;
}
interface B extends A {
    b;
}
interface C extends B {
    c;
}
interface G<T, U extends B> {
    x;
    y;
}
declare var v1;
declare var v2;
declare var v4;