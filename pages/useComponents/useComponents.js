// pages/useComponents/useComponents.js

Page({

  data: {
    count:0
  },
  
  handleIncrement(event){
    console.log("---------")
    console.log(event.detail.age)
    this.setData({
      count: this.data.count+1
    })
  }


})