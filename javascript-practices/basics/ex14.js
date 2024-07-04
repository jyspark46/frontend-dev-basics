/**
 * URL 다루기
 * 
 * 예 1) redirect
 *    - location.href = url;
 * 
 * 예 2) ajax 통신
 *    - $.ajax(url)
 *    - fetch(url)
 *    - axios(url)
 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape: URL 전부를 encoding 하기 때문에 사용 X -> deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL 전체 중 파라미터만 encoding -> url 전체를 encoding 해야 하는 경우 사용(O)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding 해야 하는 경우 사용(O), url 전체를 encoding 해야 하는 경우 사용(X)
var url4 = encodeURIComponent(url);
console.log(url4); // 잘못 사용하는 예시

// 4. encodeURIComponent 제대로 사용하는 예시
// -> 만들어야 할 URL: http://www.mysite.com/user?name=둘리&email=dooly@gmail.com

var url = "http://www.mysite.com/user"; // 기본 URL 설정
var formData = {
    name: '둘리',
    email: 'dooly@gmail.com'
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));