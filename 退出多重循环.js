/**
 *
 * Created by 李木子· on 2017/9/3.
 */

var print = function (i) {
    console.log(i);
};
var func = function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                return print(i);
            }
        }
    }
};
func()
