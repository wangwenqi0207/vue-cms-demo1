<template>
  <div id="app">
   <div id='container'></div>
  </div>
</template>

<script>
export default {
name: 'demo15',
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
            var opts = {
            subdistrict: 0,
            extensions: 'all',
            level: 'city'
        };
    //利用行政区查询获取边界构建mask路径
    //也可以直接通过经纬度构建mask路径
    var district = new AMap.DistrictSearch(opts);
    district.search('西湖区', function(status, result) {
        var bounds = result.districtList[0].boundaries;
        var mask = []
        for(var i =0;i<bounds.length;i+=1){
            mask.push([bounds[i]])
        }
        var map = new AMap.Map('container', {
            mask:mask,
            center:[120.130203,30.2],
            viewMode:'3D',
            rotateEnable: false,  //地图是否可旋转
            zoomEnable: false,  //地图是否可缩放
            doubleClickZoom: true, //是否双击可放大
            showLabel:false,
            labelzIndex:130,
            pitch:0,
            zoom:11.5,
            mapStyle:'amap://styles/darkblue',
            // layers:[
            //     new AMap.TileLayer.RoadNet({
            //         //rejectMapMask:true
            //     }),
            //     new AMap.TileLayer.Satellite()
            // ]
        });
        // var maskerOut = new AMap.Marker({//区域外的不会显示
        //     position:[120.15,30.28],
        //     map:map
        // })

        //点标记
            var markers = [];
            var positions = [[120.130203,30.259324],[120.130203,30.235]];

            for (var i = 0, marker; i < positions.length; i++) {
                marker = new AMap.Marker({
                    map: map,
                    position: positions[i],
                    offset: new AMap.Pixel(-13, -30)
                });
                markers.push(marker);
            }


        for(var i =0;i<bounds.length;i+=1){
            new AMap.Polyline({
                path:bounds[i],
                strokeColor:'#317EF3',
                strokeWeight:5,
                map:map
            })
        }
    });

    }
}
    
}
</script>

<style scoped>
    #container {
        width: 100%;
        height: 800px;
        margin: 0 auto;
        margin-top:-50px;
    }
    #loadingTip {
        position: absolute;
        z-index: 9999;
        top: 0;
        left: 0;
        padding: 3px 10px;
        background: red;
        color: #fff;
        font-size: 14px;
    }
</style>
