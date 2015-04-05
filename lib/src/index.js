var Multi = require("./mult");
var add = require("./add");
var result = add(1, 2);
console.log(result + 1);
var mul = new Multi();
mul.do(1, 2);
if (mul) {
    console.log("test");
}
