// pages/image/image.js
Page({
  //页面的初始数据
  data: {
    chooseImage: "",
  },
  
  onChooseImage() {
    var _this = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        if (res.errMsg == "chooseImage:ok") {
          _this.setData({
            chooseImage: res.tempFilePaths[0]
          })
        }
      },
    })
  }
})