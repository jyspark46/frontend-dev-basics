/* null 과 undefined */

var myVar1 = undefined; // 명시적으로 undefined 대입
var myVar2;             // 암시적으로 undefined 대입
var myVar3 = null;      //
// 어떤 변수를 정의할 때 초기화하기 애매한 경우 -> 위의 3개 (주로 2번)의 방법을 사용 !!!
console.log(myVar1 + " : " + myVar2 + " : " + myVar3);

// undefined와 null의 동치(equal)성 비교
console.log(myVar1 == myVar3);  // 값 비교
console.log(myVar1 === myVar3); // 타입 비교 + 값 비교

console.log("=============================");
// == : equality, 값의 동치성, 형 변환
console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 11);                 // 11
console.log('abc' + new String('abc')); // 'abcabc'
console.log(1 + '11');                  // 111
console.log('11' + 1);                  // 111

console.log("=============================");
/**
 * 1. 타입의 동일성
 * 2. 타입이 같은 경우
 *    2-1. primitive type: 값의 동일성
 *    2-2. object type: 객체의 동일성
 */
console.log('4' === 4);
console.log(1 === true);
console.log('abc' === new String('abc'));
console.log(4 === 2);
console.log(new Number(10) === new Number(10));