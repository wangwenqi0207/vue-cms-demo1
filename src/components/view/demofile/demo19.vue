<template>
  <div id="app">
    <div ref="mapBox" id="mapBox" style="height:450px;width:450px"></div>
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
  
    },
    methods:{
    getmap(radius1, radius2, centerLon, centerLat, Lon, Lat, currentAddress) {
      var map = new AMap.Map("mapBox", {
        center: [
          centerLon ? centerLon : 120.197767,
          centerLat ? centerLat : 30.185362
        ], // [纬度，经度]
        resizeEnable: true,
        zoom: 10
      });
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
      var circle = new AMap.Circle({
        center: [
          120.197767 ? 120.197767 : 120.197767,
          30.185362 ? 30.185362 : 30.185362
        ],
        radius: 500 ? 800 : 500, //半径
        // borderWeight: 3,
        strokeColor: "#FF33FF",
        strokeOpacity: 0,
        strokeWeight: 6,
        strokeOpacity: 0,
        fillOpacity: 0.4,
        // strokeStyle: 'dashed',
        // strokeDasharray: [10, 10],
        // 线样式还支持 'dashed'
        fillColor: "#1791fc",
        zIndex: 90
      });
      circle.setMap(map);
      var circle1 = new AMap.Circle({
        center: [
          120.210000 ? 120.210000 : 120.210000,
          30.185362 ? 30.195362 : 30.195362
        ],
        radius: radius2 ? radius2 : 800, //半径
        borderWeight: 3,
        strokeColor: "#FF33FF",
        strokeOpacity: 0,
        strokeWeight: 6,
        strokeOpacity: 0,
        fillOpacity: 0.4,
        // strokeStyle: 'dashed',
        // strokeDasharray: [10, 10],
        // 线样式还支持 'dashed'
        fillColor: "pink",
        zIndex: 50
      });
      circle1.setMap(map);
      var circleCenter = new AMap.Circle({
        center: [
          centerLon ? centerLon : 120.197767,
          centerLat ? centerLat : 30.185362
        ],
        radius: 30, //半径
        borderWeight: 3,
        strokeColor: "#FF33FF",
        strokeOpacity: 0,
        strokeWeight: 6,
        strokeOpacity: 0,
        fillOpacity: 0.4,
        // strokeStyle: 'dashed',
        // strokeDasharray: [10, 10],
        // 线样式还支持 'dashed'
        fillColor: "black",
        zIndex: 100
      });
      circleCenter.setMap(map);
      var marker = new AMap.Marker({
        icon:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [120.197767, 30.185362],
        // position:[120.197767,30.185362],
        offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(map);
      // 缩放地图到合适的视野级别
      map.setFitView([circle1, marker]);
      if ("星巴克") {
        marker.setTitle("星巴克");
      }
    },
    }   
    
}
</script>

<style scoped>
    
</style>
