
$(function() {

    // 接受传进来的图片地址数组
    var images = ['./images/one.png','./images/two.png','./images/three.png','./images/four.png'];
    // 两个按钮
    var btn_left = $('.left');
    var btn_right = $('.right');
    // 轮播盒子
    var lunbo = $('.lunbo');
    // 给轮播组件注入图片地址
    setSlider(images);

    var allWidth = (images.length + 2) * 800;
    lunbo.css('width',allWidth)
    var onePageWidth = 800;
    var pages = images.length;
    var page = 1;
    // 点击向左按钮
    btn_left.click(function() {
        if(lunbo.is(":animated")) {
            return false;
        }
        if(page == 1) {
            lunbo.css('left',-(allWidth - onePageWidth));
            lunbo.animate({left: '+=' + onePageWidth});
            page = pages;
        } else {
            lunbo.animate({left: '+=' + onePageWidth});
            page--
        }
    })
    // 点击向右按钮
    btn_right.click(function() {
        if(lunbo.is(":animated")) {
            return false;
        }
        if(page == pages) {
            lunbo.css('left',0);
            page = 1;
            lunbo.animate({left: '-=' + onePageWidth})
        } else {
            lunbo.animate({left: '-=' + onePageWidth})
            page++
        }
    })
    // 轮播组件设置
    function setSlider (args) {
        var html = [];
        html.unshift('<div class="img1">\n' +
            '                    <image class="img" src="'+ args[args.length-1] +'"></image>\n' +
            '                </div>')
        for(var i of args) {
            html.push('<div class="img1">\n' +
                '                    <image class="img" src="'+ i +'"></image>\n' +
                '                </div>')
        }
        html.push('<div class="img1">\n' +
            '                    <image class="img" src="'+ args[0] +'"></image>\n' +
            '                </div>');
        lunbo.html(html);
    }
})