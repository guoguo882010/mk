/*使用rem布局 必须导入 默认字体100px
* 所有大小宽高都可以根据这个值计算
* 12px = 12/100 = 0.12rem
* 14px = 0.14rem
* 16px = 0.16rem
* */
var html = document.getElementsByTagName("html")[0];
var rootResize = function() {
    var winClient = document.documentElement.clientWidth;
    var fontSize = winClient < 640 ? (winClient / 640)*100 : 100;
    if (fontSize < 20) {
        fontSize = 20;
    }
    html.style.fontSize = fontSize + "px";
}
rootResize();
window.onresize = function() {
    rootResize();
}