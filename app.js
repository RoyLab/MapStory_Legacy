/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert(Media);
}*/

Ext.application({
    name: 'senchaApp1',

    requires: [
        'Ext.MessageBox',
    ],

    views: [
        'Main',
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('senchaApp1.view.Main'));

        var position=new AMap.LngLat(121.44114,31.031569);
        //var b = new BMap.Bounds(new BMap.Point(121.43009,31.020088),
        //    new BMap.Point(121.462681,31.045555));
        map = new AMap.Map('allmap', {
            view: new AMap.View2D({//创建地图二维视口
              center:position,//创建中心点坐标
              zoom:14, //设置地图缩放级别
              rotation:30 //设置地图旋转角度
             }),
            resizeEnable: true,
            rotationEnable: true
        });
        /*map.plugin('AMap.Geolocation', function () {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //获取当前位置信息
        function getCurrentPosition () {
            geolocation.getCurrentPosition();
        };
        //监控当前位置并获取当前位置信息
        function watchPosition () {
            geolocation.watchPosition();
        };
        //解析定位结果
        function onComplete (data) {
            var str = '<div>定位成功</div>';
            str += '<div>经度：' + data.position.getLng() + '</div>';
            str += '<div>纬度：' + data.position.getLat() + '</div>'; 
            str += '<div>精度：' + data.accuracy + ' 米</div>';
            str += '<div>是否经过偏移：' + (data.isConverted ? '是' : '否') + '</div>';
            result.innerHTML = str;
        };
        //解析定位错误信息
        function onError (data) {
            var str = '<p>定位失败</p>';
            str += '<p>错误信息：'
            switch(data.info) {
                case 'PERMISSION_DENIED':
                    str += '浏览器阻止了定位操作';
                    break;
                case 'POSITION_UNAVAILBLE':
                    str += '无法获得当前位置';
                    break;
                case 'TIMEOUT':
                    str += '定位超时';
                    break;
                default:
                    str += '未知错误';
                    break;
            }
            str += '</p>';
            result.innerHTML = str;
        };*/

        var media = new Media('/android_asset/www/resources/mp3/04.mp3');
        media.play();
        //function onSuccess(){alert('end');}
        //function onErr(e){var str = ''; for (i in e) {str += i}; alert('error'+ e.code);}
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
