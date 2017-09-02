/**
 * Created by 李木子· on 2017/9/2.
 */
function fun1() {
    var a = 1;
   return function () {
      return ++a;
    }
}
var num =  fun1();
 console.log(num())
 console.log(num())