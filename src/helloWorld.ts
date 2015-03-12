/// <reference path="../typings/lodash/lodash.d.ts" />

module Greeting {
  export function config (opt: {
    /* this.name */
    name: string;
    includes?: string[];
    excludes?: string[];
  }) : void {

  }


  export class Pet {
    a: string;
    constructor (a1: string) {
      this.a = a1;
    }
    concat (b: string) {
      return this.a + b;
    }
  }

  export class Hello{
    constructor(private text: string){
    }
    say() : void{
      console.log(this.text);
    }
  }
}

var arr: {name: string; key: number}[] = [{
  name: 'foo', key: 1
}, {
  name: 'bar', key: 3
}, {
  name: 'foo', key: 5
}];

console.log(_.groupBy(arr, 'name'));


var hello : Greeting.Hello = new Greeting.Hello("Hello, World!");

hello.say();

