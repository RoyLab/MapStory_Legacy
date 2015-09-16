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
        'Ext.MessageBox'
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
        mapView = Ext.create('senchaApp1.view.Main');
        Ext.Viewport.add(mapView);

        var position=new AMap.LngLat(121.44114,31.031569);
        // HOME: 118.850003,31.940681
        // SJTU: 121.44114,31.031569
        //var b = new BMap.Bounds(new BMap.Point(121.43009,31.020088),
        //    new BMap.Point(121.462681,31.045555));

        map = new AMap.Map('allmap', {
            view: new AMap.View2D({//创建地图二维视口
              center:position,//创建中心点坐标
              zoom:14, //设置地图缩放级别
              rotation:0 //设置地图旋转角度
             }),
            resizeEnable: true,
            rotateEnable: true
        });


        var marker = new AMap.Marker({                 
            position:position,//基点位置                 
            offset:new AMap.Pixel(-14,-34),//相对于基点的偏移位置
            rotation: 90,                 
            icon:new AMap.Icon({  //复杂图标                 
                size:new AMap.Size(28,37),//图标大小                 
                image:"http://webapi.amap.com/images/custom_a_j.png",//大图地址                 
                imageOffset:new AMap.Pixel(-28,0)//相对于大图的取图位置                 
            })                 
        });             

        marker.setMap(map);


        addCloudLayer();
        
        //叠加云数据图层
        function addCloudLayer() {
            //加载云图层插件
            map.plugin('AMap.CloudDataLayer', function () {
                var layerOptions = { 
                    //query:{keywords: '三'}, 
                    clickable:true
                };
                var cloudDataLayer = new AMap.CloudDataLayer('55e433fce4b02580c5f3037c', layerOptions); //实例化云图层类
                cloudDataLayer.setMap(map); //叠加云图层到地图

                AMap.event.addListener(cloudDataLayer, 'click', function (result) {
                    var clouddata = result.data;
                    var infoWindow = new AMap.InfoWindow({
                        content:"<h3><font face=\"微软雅黑\"color=\"#3366FF\">"+ clouddata._name +"</font></h3><hr />地址："+ clouddata._address + "<br />",
                        size:new AMap.Size(300, 0),
                        autoMove:true,
                        offset:new AMap.Pixel(0,-25)
                    });
                    
                    infoWindow.open(map, clouddata._location);
                });
            });
        }


        map.plugin(["AMap.ToolBar"], function () {
              toolBar = new AMap.ToolBar();
              map.addControl(toolBar);
            });


        map.plugin('AMap.Geolocation', function () {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'LT',    //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
            geolocation.watchPosition();

            AMap.event.addListener(geolocation, 'complete', 
                function (data) {
                    /*var str = '定位成功\n';
                    str += '经度：' + data.position.getLng() + '\n';
                    str += '纬度：' + data.position.getLat() + '\n'; 
                    str += '精度：' + data.accuracy + ' 米\n';
                    str += '是否经过偏移：' + (data.isConverted ? '是' : '否') + '\n';
                    alert(str);*/
                    marker.setPosition(data.position);


                    var search;
                    var searchOptions = {
                        orderBy: '_id:ASC'
                    };
                    //加载CloudDataSearch服务插件
                    AMap.service(["AMap.CloudDataSearch"], function() {
                        search = new AMap.CloudDataSearch('55e433fce4b02580c5f3037c', searchOptions); //构造云数据检索类
                        search.searchNearBy(data.position, 200, function(status, result) {
                            console.info(result);
                            if (status === 'complete' && result.info === 'OK') {
                                //alert('the current music is :'+result.datas[0].mp3);
                            }
                        });
                    });

        
                }
            );//返回定位信息

            AMap.event.addListener(geolocation, 'error', 
                function onError (data) {
                    var str = '定位失败\n';
                    str += '错误信息：\n'
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
                    alert(str);
                }
            );      //返回定位出错信息
        });


        if (Ext.os.is.Android)
        {
            document.addEventListener("deviceready", onDeviceReady, false);

            function onDeviceReady() {
                navigator.compass.watchHeading(onSuccess, onError);
                //alert('deviceready');
            }

            // onSuccess: Get the current heading
            //
            function onSuccess(heading) {
                marker.setRotation(heading.magneticHeading);
                //alert('Heading: ' + heading.magneticHeading);
            }

            // onError: Failed to get the heading
            //
            function onError(compassError) {
                alert('Compass Error: ' + compassError.code);
            }

            //var media = new Media(string, onMediaSuccess, onMediaError, onMediaStatusChanged);
            //media.play();
            function onMediaSuccess(){}
            function onMediaError(e){var str = ''; for (i in e) {str += i}; alert('error'+ e.code);}
            function onMediaStatusChanged(oldStatus, newStatus){alert('change status:'+oldStatus+newStatus);}
        }

        if (!window.console || !console.log) {alert("console.log not supported.");}
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
