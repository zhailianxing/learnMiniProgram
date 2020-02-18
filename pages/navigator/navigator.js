// pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      testPass:2
  },

  handleNav(){
    wx.navigateTo({
      url: '/pages/scrollView/scrollView?id=1',
    })
  }
})