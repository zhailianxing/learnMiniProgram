// pages/useComponents/useComponents.js

Page({

  data: {
    count:0
  },
  
  handleIncrement(){
    console.log("---------")
    this.setData({
      count: this.data.count+1
    })
  }


})