/**
 * default parameter
 */

const print1 = function(str) {
    console.log(str.join(':'));
}

print1(['Always', 'with', 'me']);


const print2 = function (str, end='\n') {
  console.log(str.join(end));
};

print2(["Always", "with", "me"], '');