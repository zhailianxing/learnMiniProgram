// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
  },
  btnClick: function (options) {
    this.setData({
      isActive: true
    })
    console.log("yes")
  },

 
})