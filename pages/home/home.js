// pages/home/home.js
var app = getApp()
console.log(app.globalData)

Page({
  // 2.初始化数据
  data: {
    message: "小伙子可以啊",
    list: []
  },
  //  3.监听wxml中的监听事件
  clickeEvent(){
    console.log("哈哈哈被 点击 了")
  },
  //1.在生命周期函数中发送网络请求
  onLoad: function(options) {
    // wx.request({
    //   url: 'xxx',
    //   success: (res) => {
    //     if (res.data.data.code == 0) {
    //       // 必须使用this.setData修改变量，这样wxml才会刷新
    //       this.setData({
    //         list: res.data.data.data
    //       })
    //     }
    //   }
    // })
  },
  // 4. 其他监听：
  // 需要在当前page.json中配置enablePullDownRefresh为true
  onPullDownRefresh(){

  },

})