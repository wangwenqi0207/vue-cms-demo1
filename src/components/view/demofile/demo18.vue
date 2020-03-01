<template>
  <div id="app">
   <div id='container'>
       <!-- <img src="../../../assets/map.png" alt="" class="map">  -->
   </div>
  </div>
</template>

<script>
export default {
name: 'demo15',
data () {
return {
    map: null,
    scale:null,
}
},
mounted () {
    this.getmap()
    },
    methods:{
    getmap(){
        var map = new AMap.Map("container", {
        resizeEnable: true,
        zoom:11.3,
        center: [120.130203,30.2],//地图中心点
        rotateEnable: false,  //地图是否可旋转
        zoomEnable:false,  //地图是否可缩放
        doubleClickZoom:false, //是否双击可放大
        showLabel:true,
        dragEnable: false,
        labelzIndex:1000,
        pitch:0,
        zIndex:999,
        mapStyle:"amap://styles/1b503d8646d543d86436b36cb44edd58",
        viewMode: '3D',   //2d时会缩小
    });
    
    var district = null;
    var polygons=[];
    function drawBounds() {
        //加载行政区划插件
        if(!district){
            //实例化DistrictSearch
            var opts = {
                subdistrict: 0,   //获取边界不需要返回下级行政区
                extensions: 'all',  //返回行政区边界坐标组等具体信息
                level: 'district',  //查询行政级别为 市 
            };
            district = new AMap.DistrictSearch(opts);
        }
        //行政区查询
        district.setLevel("district")
        district.search('西湖区', function(status, result) {
            map.remove(polygons)//清除上次结果
            polygons = [];
            var bounds = result.districtList[0].boundaries;
            if (bounds) {
                for (var i = 0, l = bounds.length; i < l; i++) {
                    //生成行政区划polygon
                    var polygon = new AMap.Polygon({
                        strokeWeight: 3,
                        path: bounds[i],
                        fillOpacity: 0.1,
                        // fillColor: '#409EFF',  //西湖区域内填充颜色
                        strokeColor: '#409EFF'
                    });
                    polygons.push(polygon);
                }
            }
            map.add(polygons)
            map.setFitView(polygons);//视口自适应

        //背景遮罩
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
            zIndex:999,
            //线条颜色，使用16进制颜色代码赋值。默认值为#006600
            strokeColor: '#000',
            strokeWeight: 2,
            //轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            strokeOpacity:0,
            transparency:0,
            //多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
            fillColor: '#000',
            //多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
            fillOpacity: 0.1,
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
        });
    }
    drawBounds();
    

    //点标记
            var markers = [];
            var positions = [[120.130203,30.259324],[120.130203,30.235],[120.098086,30.170467]];

            for (var i = 0, marker; i < positions.length; i++) {
                marker = new AMap.Marker({
                    map: map,
                    position: positions[i],
                    zIndex:999,
                    // content: markerContent,
                    // icon:"RectangleFlagPin",
                    offset: new AMap.Pixel(-13, -30),
                    title:'我在这里'
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
    position: relative;
    z-index:1;
}
.map{
    position: absolute;
    top: 110px;
    left: 580px;
    z-index:10;
    /* display: none; */
}
</style>
