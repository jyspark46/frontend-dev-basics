/**
 * 변수의 스코프(Scope)
 * 
 * 1. 자바스크립트는 코드에서 변수의 범위를 알 수 있음 !! -> 정적 스코프
 * 2. 자바스크립트는 전역 범위가 있음
 * 3. ES6 이전(<= ES5)
 *      - 자바와 같은 블록 범위를 지원하지 않는다.
 *      - 함수 범위만 지원 !!!
 *      - var 키워드를 사용해야 함수 범위를 가진다.
 * 4. ES6 이후(ES2015 ~ ES2024)
 *      - 자바와 같은 블록 범위를 지원한다.
 *      - let 키워드를 사용해서 블록 범위의 변수를 만든다.
 *      - const 키워드를 사용해서 블록 범위의 상수를 만든다.
 * 5. 결론: const/let 사용 -> 둘 중에 하나를 반드시 붙이자 !!!
 *         - 안 붙이면: 전역범위가 됨 => hoisting
 */
var i = 20; // 전역 scope
var f = function() {
    var i = 10; // 함수 scope
    j = 100; // 전역 scope

    console.log("i: " + i);
    j = j - i;
}

f();
console.log("i: " + i);
console.log("j: " + j);

console.log("=== var 키워드는 함수 블록에서만 범위를 만든다.");
if(90 + 10 === 100) {
    var k = 10; // 전역 scope
}

console.log(k);
// console.log(x); // not defined error