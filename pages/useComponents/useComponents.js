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
  },
  // 处理组件中传递过来的事件
  handleItemClick(event) {
      console.log("page handleItemClick")
      console.log(event)
    console.log(event.detail.index)
    console.log(event.detail.title)

  }


})