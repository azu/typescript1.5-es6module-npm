import Multi = require("./mult");
import add from "./add";
var result = add(1, 2);
console.log(result + 1);

var mul = new Multi();
mul.do(1, 2);

if (mul){
    console.log("test")

}
