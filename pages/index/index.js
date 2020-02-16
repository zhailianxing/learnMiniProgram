Page({
  data: {
    // 经度纬度有正负的。 经纬度用南纬是负, 北纬是正, 东经是正, 西经是负。
    // 赤道纬度是0.北极圈是北纬90度（+90），南极圈是南纬90度（-90）
    latitude: 23.099994,
    longitude: 113.324520,
    polyline: [{
      points: [{
        longitude: 113.3245211, // 经度
        latitude: 23.10229 // 纬度
      }, {
        longitude: 113.324520,
        latitude: 23.11229
      }, {
        longitude: 113.334520,
        latitude: 23.12229
      }],
      color: "#FF0000DD",
      width: 8,
      dottedLine: true,
      arrowLine: true,
    }],
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})