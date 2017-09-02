/**
 *
 * Created by 李木子· on 2017/9/3.
 */

//以往做法
var googleMap = {
    show: function () {
        console.log('开始渲染谷歌地图');
    }
};
var baiduMap = {
    show: function () {
        console.log('开始渲染百度地图');
    }
};
var renderMap = function (type) {
    if (type === 'google') {
        googleMap.show();
    } else if (type === 'baidu') {
        baiduMap.show();
    }
};
 renderMap('google');    // 输出：开始渲染谷歌地图
 renderMap( 'baidu' );     // 输出：开始渲染百度地图

//多态封装相似部分
var renderMap = function (map) {//固定部分，继续增添或删减api都可不动这一部分
    if (map.show instanceof Function) {//如果传入的对象有show方法
        map.show();
    }
};

//谷歌
renderMap(googleMap)
//百度
renderMap(baiduMap)

//增加搜搜api
var sousou = {
    show: function () {
        console.log('开始渲染搜搜地图');
    }
}
renderMap(sousou)