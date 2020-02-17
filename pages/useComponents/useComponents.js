// pages/useComponents/useComponents.js

Page({
  data: {
    count:0
  },
  
  handleIncrement(event){
    console.log("---------")
    // 数据存放在 event.detail中 
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
  },

  pageClick(){
    // 最终目的：修改组件对象的数据
    // 1.获取对象
    const my_sel = this.selectComponent("#my-select-id")
    // 2. 修改数据
    my_sel.setData({
      counter: my_sel.data.counter+ 10
    })

    // 3. 其实可以调用组件中的方法，方法内部进行对数据的修改
  }


})