// pages/mustache/mustache.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: false,
    isShow: false,
    score: 0,
    
  },

  btn3Click: function (options) {
    this.setData({
      score: this.data.score + 10
    })
  },
  
  btnClick: function (options) {
    this.setData({
      isActive: true
    })
  },

  btn2Click: function (options) {
    this.setData({
      isShow: true
    })
  },


})