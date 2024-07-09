/**
 * un-named export
 * default 키워드를 사용
 */

// export default {
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract: function(a, b) {
//         return a - b;
//     }
// }  

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

// export default {
//     add: add,
//     subtract: subtract
// };

export default {add, subtract};