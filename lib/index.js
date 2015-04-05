var Multi = require("./mult");
var add_1 = require("./add");
var result = add_1.default(1, 2);
console.log(result + 1);
var mul = new Multi();
mul.do(1, 2);
if (mul) {
    console.log("test");
}
//# sourceMappingURL=index.js.map