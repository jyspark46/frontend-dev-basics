// import 하기

// mod01, mod02 un-named export 모듈에서 import 할 때는 반드시 이름(myFunction)을 지정해야 함
import myFunction from './mod01.mjs';
import myObject from './mod02.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(10, 20));

// mod03
// 1) named export 모듈의 다수 객체 import 시 destruction 하기
import {subtract} from './mod03.mjs';
console.log(subtract(20, 10));

// 2) named export는 import 대상이 다수이기 때문에 특정 이름을 지정할 수 없음
//    대신, '* as 이름'을 사용할 수 있음
import * as m from './mod03.mjs';
console.log(subtract(20, 10));

// mod04
import math, {add} from './mod04.mjs';
console.log(math.subtract(20, 10));
console.log(add(10, 20))