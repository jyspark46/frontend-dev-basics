/**
 * Array 확장 (prototype 기반의 확장)
 * 예제: List 함수 추가
 */

Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(var i = 0; i < value.length; i++) {
        //     this.splice(index++, 0, value[i]);
        // }

        // 오류 - 주의해야 하는 코드 !
        // callback 함수 안의 this는 어휘(lexical, 코드 진행 흐름)상의 this와 일치하지 않는다 !!!
        // -> this는 호출할 때마다 변해서 그 때마다 결정되기 때문 !!
        // value.forEach(function(e) {
        //     console.log(this);
        //     this.splice(index++, 0, e);
        // });

        // 해결 방법 1
        // var _this = this;
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e);
        // });

        // 해결 방법 1 - 1) 화살표 함수
        // value.forEach((e) => {
        //     this.splice(index++, 0, e)
        // });

        // 해결 방법 2
        value.forEach(function(e) {
            this.splice(index++, 0, e);
        }.bind(this));
    } else {
        this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a); // 기대하는 결과: [1, 2, 'a', 'b', 'c', 4]