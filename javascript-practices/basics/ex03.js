/* null 과 undefined */

var myVar1 = undefined; // 명시적으로 undefined 대입
var myVar2;             // 암시적으로 undefined 대입
var myVar3 = null;      //
// 어떤 변수를 정의할 때 초기화하기 애매한 경우 -> 위의 3개 (주로 2번)의 방법을 사용 !!!

console.log(myVar1 + " : " + myVar2 + " : " + myVar3);