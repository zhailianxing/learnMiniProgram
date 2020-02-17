// pages/scrollView/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    const pages = getCurrentPages()
    const lastPage = pages[pages.length-2]
    lastPage.setData({
      testPass:1000
    })
  },


})