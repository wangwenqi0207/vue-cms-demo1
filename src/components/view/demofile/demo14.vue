<template>
  <div id="app">
   <div id='container'></div>
  </div>
</template>

<script>
export default {
name: 'test',
data () {
return {
    map: null,
}
},
mounted () {
    this.getmap()
    // var windowsArr = [];
    // var marker = [];
    // var map = new AMap.Map("container", {
    //     resizeEnable: true,
    //     center: [120.211877, 30.255194],//地图中心点
    //     zoom: 13,//地图显示的缩放级别
    //     keyboardEnable: false,
    //     showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
    //     resizeEnable: true, //是否监控地图容器尺寸变化，默认值为false
    //     dragEnable: false, // 地图是否可通过鼠标拖拽平移，默认为true
    //     keyboardEnable: false, //地图是否可通过键盘控制，默认为true
    //     doubleClickZoom: true, // 地图是否可通过双击鼠标放大地图，默认为true
    //     zoomEnable: false, //地图是否可缩放，默认值为true
    //     rotateEnable: false, // 地图是否可旋转，3D视图默认为true，2D视图默认false
    //     resizeEnable: true,
    // });
  
    },
    methods:{
        getmap(){
        var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [120.130203,30.2],//地图中心点
        rotateEnable: false,  //地图是否可旋转
        zoomEnable:true,  //地图是否可缩放
        doubleClickZoom:false, //是否双击可放大
        showLabel:true,
        dragEnable: false,
        labelzIndex:150,
        expandZoomRange:true,
        zoom:12,
        mapStyle:"amap://styles/1b503d8646d543d86436b36cb44edd58"
        });

        console.log(map.getZoom())
    //遮罩背景
    new AMap.DistrictSearch({
        extensions:'all',
        subdistrict:0
    }).search('西湖区',function(status,result){
        // 外多边形坐标数组和内多边形坐标数组
        var outer = [
            new AMap.LngLat(-360,90,true),
            new AMap.LngLat(-360,-90,true),
            new AMap.LngLat(360,-90,true),
            new AMap.LngLat(360,90,true),
        ];
        var holes = result.districtList[0].boundaries

        var pathArray = [
            outer
        ];
        pathArray.push.apply(pathArray,holes)
        var polygon = new AMap.Polygon({
            pathL:pathArray,
            //线条颜色，使用16进制颜色代码赋值。默认值为#006600
            strokeColor: '#409EFF',
            strokeWeight: 4,
            //轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            strokeOpacity:0,
            //多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
            fillColor: 'rgba(0,0,0)',
            //多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            fillOpacity: 0.5,
            //轮廓线样式，实线:solid，虚线:dashed
            strokeStyle:'solid',
            /*勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在
              ie9+浏览器有效 取值：
              实线：[0,0,0]
              虚线：[10,10] ，[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
              点画线：[10,2,10]， [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实
              线和10个像素的空白 （如此反复）组成的虚线*/
            strokeDasharray:[10,2,10]
        });
        polygon.setPath(pathArray);
        map.add(polygon);
    })

    //点标记
            var markers = [];
            var positions = [[120.130203,30.259324],[120.130203,30.235],[120.098086,30.170467]];

            for (var i = 0, marker; i < positions.length; i++) {
                marker = new AMap.Marker({
                    map: map,
                    position: positions[i],
                    // content: markerContent,
                    // icon:"RectangleFlagPin",
                    offset: new AMap.Pixel(-13, -30),
                    // icon: new AMap.Icon({            
                    // image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1973034388,1185974770&fm=26&gp=0.jpg",
                    // size: new AMap.Size(52, 52),  
                    // imageSize: new AMap.Size(23,23)
                // })
                });
                markers.push(marker);
            }
    }
}
    
}
</script>

<style scoped>
    #container {
        width: 100%;
        height:900px;
        margin: 0 auto;
    }
</style>
