<template>
  <div id="app">
     <div id='container'></div>
  </div>
</template>

<script>
export default {
name: 'demo16',
data () {
return {
    map: null,
}
},
mounted () {
    this.getmap()
    },
    methods:{
        getmap(){
            var map = new AMap.Map('container', {
                center:[120.130203,30.2],
                rotateEnable: false,  //地图是否可旋转
                zoomEnable: false,  //地图是否可缩放
                doubleClickZoom:false, //是否双击可放大
                showLabel:false,
                dragEnable: false,
                labelzIndex:150,
                pitch:0,
                zoom:11.49,
                viewMode: '3D',   //2d时会缩小
                mapStyle:'amap://styles/dark',  //样式
    });
       //map.setZoom(12.2); //设置地图层级
    new AMap.DistrictSearch({
        extensions:'all',
        // subdistrict:0
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
            strokeWeight: 2,
            //轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            strokeOpacity:1,
            transparency:0,
            //多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
            fillColor: '#000',
            //多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            fillOpacity: 1,
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
    //      var polyline = new AMap.Polyline({
    //     strokeColor: '#3366FF',   // 线颜色
    //     strokeOpacity: 1,         // 线透明度
    //     strokeWeight: 2,          // 线宽
    //     strokeStyle: 'solid',     // 线样式
    //     strokeDasharray: [10, 5], // 补充线样式
    //     geodesic: false            // 绘制大地线
    // });
    //    polyline.setPath(pathArray);
    //    map.add(polyline);
    })
      

        //点标记
        //    var markerContent = '' +
        // '<div class="custom-content-marker">' +
        // '   <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1973034388,1185974770&fm=26&gp=0.jpg">' 
        // '</div>';

            var markers = [];
            var positions = [[120.153644,30.274579],[120.053698,30.232232],[120.124404,30.288168],[120.103797,30.233897],];

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
